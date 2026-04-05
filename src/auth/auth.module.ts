import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module.js';
import { BookmarkModule } from '../bookmark/bookmark.module.js';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { PrismaModule } from '../prisma/prisma.module.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Module({
    imports: [UserModule, BookmarkModule, PrismaModule],
    controllers: [AuthController],
    providers: [AuthService, PrismaService],  
})
export class AuthModule {}
