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
exports.AuthenticationService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user.service");
let AuthenticationService = class AuthenticationService {
    constructor(jwtService, userService) {
        this.jwtService = jwtService;
        this.userService = userService;
    }
    async login(authdto) {
        console.log(authdto);
        const userexist = await this.userService.findByEmail(authdto.email);
        if (userexist) {
            if (userexist && authdto.password == userexist.password) {
                const payload = { username: userexist.email, sub: userexist.id };
                return {
                    access_token: this.jwtService.sign(payload),
                };
            }
            else {
                return 'bad password';
            }
        }
        else {
            return 'User not found';
        }
    }
    async register(userRegister) {
        console.log(userRegister);
        let user;
        try {
            user = await this.userService.create(userRegister);
        }
        catch (e) {
            console.log(e.message);
            console.log(e.code);
        }
        if (user) {
            const payload = { username: user.email, sub: user.id };
            return {
                access_token: this.jwtService.sign(payload),
            };
        }
        else {
            return 'user with this email already exist';
        }
    }
};
AuthenticationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_service_1.UserService])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map