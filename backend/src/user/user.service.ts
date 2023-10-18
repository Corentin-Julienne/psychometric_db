import { Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

	constructor(@InjectRepository(User) private userRepository: Repository<User>) {};
	
	async register(userDto: RegisterUserDto) {
		const hashedPassword: string = await bcrypt.hash(userDto.password, 12);
		const user = this.userRepository.create({
			...userDto,
			password: hashedPassword
		})
		return await this.userRepository.save(user);
	}

	async login(userDto: LoginUserDto) {

	}

	async findUserByUsername(username: string) : Promise<User | undefined> {
		return await this.userRepository.findOne({ where: {username} });
	}
}
