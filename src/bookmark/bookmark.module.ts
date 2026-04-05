import { Module } from '@nestjs/common';
import { BookmarkController } from './bookmark.controller.js';

@Module({
  controllers: [BookmarkController]
})
export class BookmarkModule {}
