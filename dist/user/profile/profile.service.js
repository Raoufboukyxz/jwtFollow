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
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const profile_entity_1 = require("../entities/profile.entity");
const User_entity_1 = require("../entities/User.entity");
let ProfileService = class ProfileService {
    constructor(userRepo, profileRepo) {
        this.userRepo = userRepo;
        this.profileRepo = profileRepo;
    }
    async create(createUserDto, user) {
        const profileclass = (0, class_transformer_1.plainToClass)(profile_entity_1.Profile, createUserDto);
        const profile = await this.profileRepo.save(profileclass);
        await this.userRepo
            .createQueryBuilder()
            .relation(User_entity_1.User, 'profile')
            .of(user)
            .set(profile);
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
    async update(id, updateProdileDto) {
        const updateProfile = (0, class_transformer_1.plainToClass)(profile_entity_1.Profile, updateProdileDto);
        return await this.userRepo
            .createQueryBuilder()
            .update(profile_entity_1.Profile)
            .set(updateProfile)
            .where('id=:id', { id: id })
            .execute();
    }
};
ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_REPOSITORY')),
    __param(1, (0, common_1.Inject)('PROFILE_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], ProfileService);
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map