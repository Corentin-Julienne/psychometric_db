import { IsNotEmpty, IsString, Length } from "class-validator";

export class Verify2FADto {
	
	@IsNotEmpty()
	@IsString()
	@Length(6)
	token: string;

	@IsNotEmpty()
	@IsString()
	username: string;
}
