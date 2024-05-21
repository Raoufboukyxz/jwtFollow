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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const User_entity_1 = require("./entities/User.entity");
let UserService = class UserService {
    constructor(userRepo, profileRepo, followersRepo, followingRepo) {
        this.userRepo = userRepo;
        this.profileRepo = profileRepo;
        this.followersRepo = followersRepo;
        this.followingRepo = followingRepo;
    }
    async create(createUserDto) {
        const userEntity = (0, class_transformer_1.plainToClass)(User_entity_1.User, createUserDto);
        return await this.userRepo.save(userEntity);
    }
    async findAll() {
        return await this.userRepo.find({
            relations: ['profile', 'following', 'follower'],
        });
    }
    async findOne(id) {
        return await this.userRepo
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.profile', 'profile')
            .leftJoinAndSelect('user.following', 'following')
            .leftJoinAndSelect('user.follower', 'follower')
            .where('user.id=:id', { id: id })
            .getOne();
    }
    async findByEmail(email) {
        return await this.userRepo
            .createQueryBuilder('user')
            .select()
            .where('user.email=:email', { email: email })
            .getOne();
    }
    async update(id, updateUserDto) {
        const updateUser = (0, class_transformer_1.plainToClass)(User_entity_1.User, updateUserDto);
        return await this.userRepo
            .createQueryBuilder()
            .update(User_entity_1.User)
            .set(updateUser)
            .where('id=:id', { id: id })
            .execute();
    }
    remove(id) {
        return `This action removes a #${id} `;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_REPOSITORY')),
    __param(1, (0, common_1.Inject)('PROFILE_REPOSITORY')),
    __param(2, (0, common_1.Inject)('FOLLOWERS_REPOSITORY')),
    __param(3, (0, common_1.Inject)('FOLLOWING_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map