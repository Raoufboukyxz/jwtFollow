"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const Following_entity_1 = require("../entities/Following.entity");
const User_entity_1 = require("../entities/User.entity");
const follower_service_1 = require("../follower/follower.service");
let FollowingService = class FollowingService {
    constructor(followerService, followingRepo, userRepo) {
        this.followerService = followerService;
        this.followingRepo = followingRepo;
        this.userRepo = userRepo;
    }
    async create(userToFollow, user) {
        console.log(userToFollow);
        let userfofollow;
        try {
            userfofollow = await this.userRepo.findOne(userToFollow);
        }
        catch (e) {
            console.log(e);
        }
        if (userfofollow) {
            const following = new Following_entity_1.Following();
            following.user = userfofollow;
            await this.followingRepo.save(following);
            await this.userRepo
                .createQueryBuilder()
                .relation(User_entity_1.User, 'following')
                .of(user)
                .add(following);
            this.followerService.create(user, userfofollow);
        }
    }
    async remove(userToUnfolloow, user) {
        let unfollow;
        try {
            unfollow = await this.userRepo.findOne(userToUnfolloow);
        }
        catch (e) {
            console.log(e);
        }
        if (unfollow) {
            await this.followingRepo
                .createQueryBuilder()
                .delete()
                .from(Following_entity_1.Following, 'following')
                .where('following.id=:id', { id: unfollow.id })
                .execute();
            this.followerService.remove(user);
        }
    }
};
FollowingService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)('FOLLOWING_REPOSITORY')),
    __param(2, (0, common_1.Inject)('USER_REPOSITORY')),
    __metadata("design:paramtypes", [follower_service_1.FollowerService,
        typeorm_1.Repository,
        typeorm_1.Repository])
], FollowingService);
exports.FollowingService = FollowingService;
//# sourceMappingURL=following.service.js.map