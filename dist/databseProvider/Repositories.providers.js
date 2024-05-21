"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepoProviders = void 0;
const Followers_entity_1 = require("../user/entities/Followers.entity");
const Following_entity_1 = require("../user/entities/Following.entity");
const profile_entity_1 = require("../user/entities/profile.entity");
const User_entity_1 = require("../user/entities/User.entity");
exports.RepoProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (connection) => connection.getRepository(User_entity_1.User),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'PROFILE_REPOSITORY',
        useFactory: (connection) => connection.getRepository(profile_entity_1.Profile),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'FOLLOWERS_REPOSITORY',
        useFactory: (connection) => connection.getRepository(Followers_entity_1.Followers),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'FOLLOWING_REPOSITORY',
        useFactory: (connection) => connection.getRepository(Following_entity_1.Following),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=Repositories.providers.js.map