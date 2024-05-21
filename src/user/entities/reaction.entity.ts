import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Workout } from './workout.entity';

@Entity()
export class Rating {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Workout, (workout) => workout.rating)
  workout: Workout;
  @Column()
  star: number;
  @CreateDateColumn()
  reactionAdded: Date;
  @Column()
  userId: number;
}
