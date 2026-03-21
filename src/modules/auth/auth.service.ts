import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UserService,
        private jwtService: JwtService
    ) { }

    async singIn(email: string, password: string): Promise<any> {
        const usuario = await this.usersService.findOneByEmail(email);

        if (usuario?.password !== password) {
            throw new UnauthorizedException();
        }

        const payload = { sub: usuario.id, email: usuario.email };
        return {
            // 💡 Here the JWT secret key that's used for signing the payload 
            // is the key that was passsed in the JwtModule
            usuario: usuario,
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
