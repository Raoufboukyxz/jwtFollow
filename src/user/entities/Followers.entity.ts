import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User.entity';

@Entity()
export class Followers {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => User, (user) => user.follower)
  user: User;
  @Column({ nullable: true })
  userId: number;
  @CreateDateColumn()
  date: string;
}
