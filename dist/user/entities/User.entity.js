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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const Followers_entity_1 = require("./Followers.entity");
const Following_entity_1 = require("./Following.entity");
const profile_entity_1 = require("./profile.entity");
const workout_entity_1 = require("./workout.entity");
const response_entity_1 = require("./response.entity");
const comments_entity_1 = require("./comments.entity");
let User = class User {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => profile_entity_1.Profile),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", profile_entity_1.Profile)
], User.prototype, "profile", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => workout_entity_1.Workout, (workout) => workout.user),
    __metadata("design:type", Array)
], User.prototype, "workout", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Followers_entity_1.Followers, (follower) => follower.user),
    __metadata("design:type", Array)
], User.prototype, "follower", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Following_entity_1.Following, (following) => following.user),
    __metadata("design:type", Array)
], User.prototype, "following", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => response_entity_1.Response, (respond) => respond.user),
    __metadata("design:type", response_entity_1.Response)
], User.prototype, "respond", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comments_entity_1.Comment, (comment) => comment.user),
    __metadata("design:type", comments_entity_1.Comment)
], User.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "profileId", void 0);
User = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=User.entity.js.map