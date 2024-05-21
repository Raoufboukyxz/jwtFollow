import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Followers } from './Followers.entity';
import { Following } from './Following.entity';
import { Profile } from './profile.entity';
import { Workout } from './workout.entity';
import { Response } from './response.entity';
import { Comment } from './comments.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column()
  phone: string;
  @Column()
  gender: string;
  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;
  @OneToMany(() => Workout, (workout) => workout.user)
  workout: Workout[];
  @OneToMany(() => Followers, (follower) => follower.user)
  follower: Followers[];
  @OneToMany(() => Following, (following) => following.user)
  following: Following[];
  @OneToMany(() => Response, (respond) => respond.user)
  respond: Response;
  @OneToMany(() => Comment, (comment) => comment.user)
  comment: Comment;
  @Column({ nullable: true })
  profileId: number;
}
