import { Profile } from './../../../typeorm/entities/Profile';
import { User } from './../../../typeorm/entities/User';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { Post } from 'src/typeorm/entities/Post';
import { CreateUserPrams, UpdateUserParam, CreateUserProfileParams, CreateUserPostParams } from 'src/utils/types';
import { Repository } from "typeorm"

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Profile) private profileRepository: Repository<Profile>,
        @InjectRepository(Post) private postRepository: Repository<Post>
    ) { }

    getUsers() {
        return this.userRepository.find({ relations: ['profile', "posts"] })
    }

    createUser(userDetails: CreateUserPrams) {
        const newUser = this.userRepository.create({ ...userDetails, createdAt: new Date() })
        return this.userRepository.save(newUser)
    }

    updateUserById(id: number, updateUserDetails: UpdateUserParam) {
        return this.userRepository.update({ id }, {
            ...updateUserDetails,
        })
    }

    deleteUserById(id: number) {
        return this.userRepository.delete({ id })
    }

    async createUserProfile(id: number, createUserProfileDetails: CreateUserProfileParams) {
        const user = await this.userRepository.findOneBy({ id })
        if (!user)
            throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST)

        const newProfile = this.profileRepository.create({
            ...createUserProfileDetails,
        })
        const saveProfile = await this.profileRepository.save(newProfile)
        user.profile = saveProfile
        return this.userRepository.save(user)
    }

    async createUserPost(id: number, createUserPostDetails: CreateUserPostParams) {
        const user = await this.userRepository.findOneBy({ id })
        if (!user)
            throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST)

        const newPost = this.postRepository.create({
            ...createUserPostDetails,
            user
        })
        return this.postRepository.save(newPost)
    }

}
