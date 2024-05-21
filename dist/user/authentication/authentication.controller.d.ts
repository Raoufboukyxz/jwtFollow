import { Authdto } from '../dto/auth-dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { AuthenticationService } from './authentication.service';
export declare class AuthenticationController {
    private authService;
    constructor(authService: AuthenticationService);
    create(createUserDto: CreateUserDto): Promise<"user with this email already exist" | {
        access_token: string;
    }>;
    findAll(authdto: Authdto, re: any): Promise<"bad password" | "User not found" | {
        access_token: string;
    }>;
}
