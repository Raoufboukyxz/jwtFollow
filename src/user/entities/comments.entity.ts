import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Workout } from './workout.entity';
import { Response } from './response.entity';
import { User } from './User.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Workout, (workout) => workout.comments)
  workout: Workout;
  @Column()
  comment: string;
  @Column({ nullable: true })
  commentId: number;
  @CreateDateColumn()
  commentCreated: Date;
  @ManyToOne(() => User, (comment) => comment.comment)
  user: User;
  @OneToMany(() => Response, (response) => response.comment)
  response: Response[];
  @Column({ nullable: true })
  userId: number;
  @Column({ nullable: true })
  workoutId: number;
}
