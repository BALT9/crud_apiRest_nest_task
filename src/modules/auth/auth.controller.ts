import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    // @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>) {
        return this.authService.singIn(signInDto.email, signInDto.password);
    }

    // 🚪 Logout (en JWT solo se hace del lado cliente o con blacklist opcional)
    @UseGuards(AuthGuard)
    @Post('logout')
    logout(@Req() req: Request) {
        // Opcional: invalidar token con blacklist
        return { message: 'Sesión cerrada correctamente' };
    }
}
