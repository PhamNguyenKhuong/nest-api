import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { CreateUserDto as Dto } from '../dto/create-user.dto.js';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @Post('login') 
    login(@Body()  dto: Dto){
        return this.authService.login(dto);
    }
    @Post('register')
    register(@Body() dto: Dto){
        return this.authService.register(dto);
    }
}
