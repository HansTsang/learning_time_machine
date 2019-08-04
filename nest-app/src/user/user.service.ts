import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
    ) { }
    async findUserbyName(name: string) {
        return await this.userRepository.findOne({ where: { name } });
    }
}
