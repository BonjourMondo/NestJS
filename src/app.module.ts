import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './app.userController';
import { UserService } from './service/app.UserSerivce';

@Module({
  imports: [],
  controllers: [AppController,UsersController],
  providers: [AppService,UserService],
  exports:[]
})
export class AppModule {}
