import { Module } from '@nestjs/common';
import { UserController } from './user.controller';

@Module({
  imports: [UserController],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
