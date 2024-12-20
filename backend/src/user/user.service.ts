import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOneBy({ email: email });
  }

  async findOneByUsername(username: string): Promise<User> {
    return this.userRepository.findOneBy({ username: username });
  }

  async create(user: User): Promise<User> {
    const {password, ...data} = user;
    
    const salt = await bcrypt.genSalt();
    
    const hashedPassword = await bcrypt.hash(password, salt);

    const createdUser = this.userRepository.create({
      ...data,
      password: hashedPassword,
    });
    return this.userRepository.save(createdUser);
  }
}
