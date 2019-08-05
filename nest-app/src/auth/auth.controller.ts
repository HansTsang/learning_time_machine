import { Controller, Get, HttpCode, Param, HttpStatus, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { callback } from './jwt.strategy';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() userDto): Promise<any> {
        // tslint:disable-next-line:no-console
        console.log(userDto);
        return this.authService.login(userDto.name, userDto.password);
    }
    @Get('checklogin')
    @UseGuards(AuthGuard('jwt'))
    // @UseGuards()
    public checkLogin() {
        return 'valid user:' + this.authService.getUser().name;
    }
}
