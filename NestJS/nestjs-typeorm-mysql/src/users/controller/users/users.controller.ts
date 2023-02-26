import { UsersService } from './../../services/users/users.service';
import { Controller, Get, Post, Body, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dtos/CreateUser.dto';
import { CreateUserPostDTO } from 'src/users/dtos/CreateUserPost';
import { CreateUserProfileDTO } from 'src/users/dtos/CreateUserProfile.dto';
import { UpdateUserDTO } from 'src/users/dtos/UpdateUser.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Get()
    getUsers() {
        return this.usersService.getUsers()
    }

    @Post()
    async createUser(@Body() CreateUserDTO: CreateUserDTO) {
        const createdUser = await this.usersService.createUser(CreateUserDTO)
        return {
            message: "User created successfully",
            id: createdUser.id,
            username: createdUser.username
        }

    }

    @Put(":id")
    async updateUserById(
        @Param("id", ParseIntPipe) id: number,
        @Body() updateUserDTO: UpdateUserDTO
    ) {
        await this.usersService.updateUserById(id, updateUserDTO)
    }

    @Delete(":id")
    async deleteUserById(@Param("id", ParseIntPipe) id: number) {
        await this.usersService.deleteUserById(id)
    }

    @Post(":id/profiles")
    createUserProfile(
        @Param("id", ParseIntPipe) id: number,
        @Body() createUserProfileDTO: CreateUserProfileDTO
    ) {
        return this.usersService.createUserProfile(id, createUserProfileDTO)
    }

    @Post(":id/posts")
    createUserPost(
        @Param("id", ParseIntPipe) id: number,
        @Body() createUserPostDTO: CreateUserPostDTO
    ) {
        return this.usersService.createUserPost(id, createUserPostDTO)
    }


}
