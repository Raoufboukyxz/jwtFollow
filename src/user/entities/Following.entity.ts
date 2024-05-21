import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User.entity';

@Entity()
export class Following {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => User, (profile) => profile.following)
  user: User;
  @CreateDateColumn()
  date: string;
  @Column({ nullable: true })
  userId: number;
}
