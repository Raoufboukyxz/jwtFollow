import { Followers } from 'src/user/entities/Followers.entity';
import { Following } from 'src/user/entities/Following.entity';
import { Profile } from 'src/user/entities/profile.entity';
import { User } from 'src/user/entities/User.entity';
import { Connection } from 'typeorm';
export const RepoProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'PROFILE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Profile),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'FOLLOWERS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Followers),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'FOLLOWING_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Following),
    inject: ['DATABASE_CONNECTION'],
  },
];
