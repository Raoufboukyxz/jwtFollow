import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Comment } from './comments.entity';
import { Rating } from './reaction.entity';
import { Exercice } from './singleworkout.entity';
import { User } from './User.entity';

@Entity()
export class Workout {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  bodyPart: string;
  @Column({ nullable: true })
  goal: string;
  @Column({ nullable: true })
  category: string;
  @Column({ nullable: true })
  sexe: string;
  @CreateDateColumn()
  sharedDate: Date;
  @Column({ nullable: true })
  description: string;
  @OneToMany(() => Exercice, (exercice) => exercice.workout, { cascade: true })
  exercice: Exercice[];
  @OneToMany(() => Comment, (comments) => comments.workout, { cascade: true })
  comments: Comment[];
  @OneToMany(() => Rating, (rating) => rating.workout, { cascade: true })
  rating: Rating[];
  @ManyToOne(() => User, (userId) => userId.workout)
  user: User;
  @Column({ nullable: true })
  userId: number;
}
