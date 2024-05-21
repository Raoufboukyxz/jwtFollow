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
exports.FollowingController = void 0;
const common_1 = require("@nestjs/common");
const following_service_1 = require("./following.service");
let FollowingController = class FollowingController {
    constructor(followingService) {
        this.followingService = followingService;
    }
    create(req, usertoFollow) {
        console.log(usertoFollow);
        return this.followingService.create(usertoFollow.userId, req.user);
    }
    remove(req, userId) {
        return this.followingService.remove(userId, req.user);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], FollowingController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], FollowingController.prototype, "remove", null);
FollowingController = __decorate([
    (0, common_1.Controller)('following'),
    __metadata("design:paramtypes", [following_service_1.FollowingService])
], FollowingController);
exports.FollowingController = FollowingController;
//# sourceMappingURL=following.controller.js.map