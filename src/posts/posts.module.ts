import { Module } from '@nestjs/common';
// nest generate controller posts
import { PostsController } from './posts.controller';
// nest generate service posts
import { PostsService } from './posts.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
