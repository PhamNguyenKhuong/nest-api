import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module.js';
import { BookmarkModule } from '../bookmark/bookmark.module.js';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';

@Module({
    imports: [UserModule, BookmarkModule],
    controllers: [AuthController],
    providers: [AuthService],  
})
export class AuthModule {}
