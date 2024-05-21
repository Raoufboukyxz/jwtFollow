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
exports.Workout = void 0;
const typeorm_1 = require("typeorm");
const comments_entity_1 = require("./comments.entity");
const reaction_entity_1 = require("./reaction.entity");
const singleworkout_entity_1 = require("./singleworkout.entity");
const User_entity_1 = require("./User.entity");
let Workout = class Workout {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Workout.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Workout.prototype, "bodyPart", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Workout.prototype, "goal", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Workout.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Workout.prototype, "sexe", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Workout.prototype, "sharedDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Workout.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => singleworkout_entity_1.Exercice, (exercice) => exercice.workout, { cascade: true }),
    __metadata("design:type", Array)
], Workout.prototype, "exercice", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comments_entity_1.Comment, (comments) => comments.workout, { cascade: true }),
    __metadata("design:type", Array)
], Workout.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reaction_entity_1.Rating, (rating) => rating.workout, { cascade: true }),
    __metadata("design:type", Array)
], Workout.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_entity_1.User, (userId) => userId.workout),
    __metadata("design:type", User_entity_1.User)
], Workout.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Workout.prototype, "userId", void 0);
Workout = __decorate([
    (0, typeorm_1.Entity)()
], Workout);
exports.Workout = Workout;
//# sourceMappingURL=workout.entity.js.map