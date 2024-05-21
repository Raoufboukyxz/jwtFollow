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
exports.Response = void 0;
const typeorm_1 = require("typeorm");
const comments_entity_1 = require("./comments.entity");
const User_entity_1 = require("./User.entity");
let Response = class Response {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Response.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Response.prototype, "response", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Response.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => comments_entity_1.Comment, (comment) => comment.response),
    __metadata("design:type", comments_entity_1.Comment)
], Response.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_entity_1.User, (res) => res.respond),
    __metadata("design:type", User_entity_1.User)
], Response.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Response.prototype, "commentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Response.prototype, "userId", void 0);
Response = __decorate([
    (0, typeorm_1.Entity)()
], Response);
exports.Response = Response;
//# sourceMappingURL=response.entity.js.map