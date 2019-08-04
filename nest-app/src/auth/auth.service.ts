import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtPayload } from './jwt-payload.interface';
import * as jwt from 'jsonwebtoken';
import { UserEntity } from 'src/entities';

@Injectable()
export class AuthService {
    private user: UserEntity;

    constructor(
        private readonly userService: UserService,
    ) { }
    async createToken(name: string, password: string): Promise<any> {
        const user = { name };
        const accessToken = jwt.sign(user, 'secretKey', { expiresIn: 3600 });
        return { accessToken };
    }
    async validateUser(name: string): Promise<any> {
        // tslint:disable-next-line:no-console
        console.log(`------->${name}`);
        return await this.userService.findUserbyName(name);
    }
    async login(name: string, password: string): Promise<any> {
        // tslint:disable-next-line:no-console
        console.log(`${name}---${password}`);
        this.user = await this.userService.findUserbyName(name);
        if (this.user !== undefined && this.user.password === password) {
            return this.createToken(this.user.name, this.user.password);
        } else {
            return 'login failed !';
        }
    }
    getUser(): UserEntity {
        return this.user;
    }
}
