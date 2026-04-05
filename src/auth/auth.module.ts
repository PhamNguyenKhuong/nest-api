import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { BookmarkModule } from '../bookmark/bookmark.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports: [UserModule, BookmarkModule],
    controllers: [AuthController],
    providers: [AuthService],  
})
export class AuthModule {}
