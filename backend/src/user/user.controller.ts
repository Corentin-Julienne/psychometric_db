import { Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { Verify2FADto } from './dto/verify-2fa.dto';
import { UserService } from './user.service';
import * as speakeasy from 'speakeasy';
import * as QRCode from 'qrcode';


@Controller('user')
export class UserController {
	
	constructor(private readonly userService: UserService) {};
	
	@Post('verify-2fa')
	async verify2FA(@Body() verify2FADto: Verify2FADto) {
		const user = await this.userService.findUserByUsername(verify2FADto.username);
		if (!user || !user.two_fa_key) {
			throw new NotFoundException('User not found or 2FA not set up');
		}

		const isVerified = speakeasy.totp.verify({
			secret: user.two_fa_key,
			encoding: 'base32',
			token: verify2FADto.token
		});

		return { isVerified };
	}

	@Post('register-2fa')
	async register2FA(@Body('username') username: string) {
		const user = await this.userService.findUserByUsername(username);
		if (!user) {
			throw new NotFoundException('User not found');
		}

		const secret = speakeasy.generateSecret({
			length: 10,
			name: ``,
			issuer: ''
		});

		
	}
}
