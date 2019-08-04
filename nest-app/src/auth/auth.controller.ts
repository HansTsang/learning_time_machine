import { Controller, Get, HttpCode, Param, HttpStatus, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { callback } from './jwt.strategy';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Get('login/:name/:password')
    @HttpCode(HttpStatus.OK)
    async login(@Param() params): Promise<any> {
        // tslint:disable-next-line:no-console
        console.log(params);
        return this.authService.login(params.name, params.password);
    }
    @Get('checklogin')
    @UseGuards(AuthGuard('jwt'))
    // @UseGuards(new RoleGuard(['admin']))
    public checkLogin() {
        return 'valid user:' + this.authService.getUser().name;
    }
}
