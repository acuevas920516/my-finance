import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  iban: string;

  @Column('decimal', { precision: 6, scale: 2 })
  initial_budget: number;

  @Column({ default: true })
  isActive: boolean;
}