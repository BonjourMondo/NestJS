import { UserDto } from './dto/UserDTO';
import {Controller, Post, Request, Next, HttpStatus, Param, Get, Response, Body} from "@nestjs/common"
import { UserService } from "./service/app.UserSerivce";
import { response } from "express";
@Controller("users")
export class UsersController{
    constructor(private userService:UserService){}

    @Get()
    async getAllUsers(@Response() res) {
        const users = await this.userService.getAllUsers();
        res.status(HttpStatus.OK).json(users);
    }

    @Get('/:id')
    async getUser(@Response() res, @Param('id') id) {
        const user = await this.userService.getUser(+id);
        res.status(HttpStatus.OK).json(user);
    }

    @Post()
    async addUser(@Response() res, @Body('user') user:UserDto) {
        console.log(user);
        console.log(user.name);
        
        const msg = await this.userService.addUser(user);
        res.status(HttpStatus.CREATED).json(msg);
    }

}