import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Comment } from './comments.entity';
import { User } from './User.entity';
@Entity()
export class Response {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  response: string;
  @CreateDateColumn()
  created: Date;
  @ManyToOne(() => Comment, (comment) => comment.response)
  comment: Comment;
  @ManyToOne(() => User, (res) => res.respond)
  user: User;
  @Column({ nullable: true })
  commentId: number;
  @Column({ nullable: true })
  userId: number;
}
