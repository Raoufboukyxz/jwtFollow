"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_controller_1 = require("./user.controller");
const database_module_1 = require("../databseProvider/database.module");
const follower_service_1 = require("./follower/follower.service");
const following_service_1 = require("./following/following.service");
const following_controller_1 = require("./following/following.controller");
const profile_controller_1 = require("./profile/profile.controller");
const profile_service_1 = require("./profile/profile.service");
const jwt_1 = require("@nestjs/jwt");
const authentication_service_1 = require("./authentication/authentication.service");
const authentication_controller_1 = require("./authentication/authentication.controller");
const jwt_auth_guard_1 = require("./authentication/jwt-auth-guard");
const jwt_strategy_1 = require("./authentication/jwt.strategy");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            jwt_1.JwtModule.register({
                secret: 'JUSTFORTESTMYBROZERES',
                signOptions: { expiresIn: '1600s' },
            }),
        ],
        controllers: [
            user_controller_1.UserController,
            following_controller_1.FollowingController,
            profile_controller_1.ProfileController,
            authentication_controller_1.AuthenticationController,
        ],
        providers: [
            {
                provide: 'APP_GUARD',
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
            user_service_1.UserService,
            follower_service_1.FollowerService,
            following_service_1.FollowingService,
            profile_service_1.ProfileService,
            authentication_service_1.AuthenticationService,
            jwt_auth_guard_1.JwtAuthGuard,
            jwt_strategy_1.JwtStrategy,
        ],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map