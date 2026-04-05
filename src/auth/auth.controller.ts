import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @Get('login') 
    login(){
        return this.authService.login();
    }
    @Post('register')
    register(){
        return this.authService.register();
    }
}
