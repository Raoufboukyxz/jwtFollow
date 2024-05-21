import { JwtService } from '@nestjs/jwt';
import { Authdto } from '../dto/auth-dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserService } from '../user.service';
export declare class AuthenticationService {
    private jwtService;
    private userService;
    constructor(jwtService: JwtService, userService: UserService);
    login(authdto: Authdto): Promise<"bad password" | "User not found" | {
        access_token: string;
    }>;
    register(userRegister: CreateUserDto): Promise<"user with this email already exist" | {
        access_token: string;
    }>;
}
