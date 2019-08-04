import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly authService: AuthService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            // passReqToCallback: true,
            secretOrKey: 'secretKey',
        });
    }

    // tslint:disable-next-line:ban-types
    async validate(payload: JwtPayload) {
        // tslint:disable-next-line:no-console
        console.log('entered jwt');
        const user = await this.authService.validateUser(payload.name);
        // if (!user) {
        //     return done(new UnauthorizedException(), false);
        // }
        // done(null, user);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}

export const callback = (err, user, info) => {
    let message;
    if (err) {
        // return (err || new UnauthorizedException(info.message));
        throw err;
    } else if (typeof info !== 'undefined' || !user) {
        switch (info.message) {
            case 'No auth token':
            case 'invalid signature':
            case 'jwt malformed':
            case 'invalid token':
            case 'invalid signature':
                message = 'You must provide a valid authenticated access token';
                break;
            case 'jwt expired':
                message = 'Your session has expired';
                break;
            default:
                message = info.message;
                break;
        }
        throw new UnauthorizedException(message);
    }
    return user;
};
