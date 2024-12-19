import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async signIn(email: string, password: string) {
        const user = await this.userService.findOneByEmail(email);
        if (user?.password !== password) {
            return new UnauthorizedException();
        }

        return user;
    }
}
