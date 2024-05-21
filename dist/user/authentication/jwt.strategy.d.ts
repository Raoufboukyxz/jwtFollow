import { Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { User } from '../entities/User.entity';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepo;
    constructor(userRepo: Repository<User>);
    validate(payload: any): Promise<User>;
}
export {};
