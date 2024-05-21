import { Followers } from 'src/user/entities/Followers.entity';
import { Profile } from 'src/user/entities/profile.entity';
import { User } from 'src/user/entities/User.entity';
import { Connection } from 'typeorm';
export declare const RepoProviders: ({
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<User>;
    inject: string[];
} | {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Profile>;
    inject: string[];
} | {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Followers>;
    inject: string[];
})[];
