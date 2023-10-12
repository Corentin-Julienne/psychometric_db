import { IsNotEmpty, IsNumber }  from 'class-validator';

export class HadAResponseDto {

	@IsNumber()
	@IsNotEmpty()
	question1: number;

	@IsNumber()
	@IsNotEmpty()
	question2: number;

	@IsNumber()
	@IsNotEmpty()
	question3: number;

	@IsNumber()
	@IsNotEmpty()
	question4: number;

	@IsNumber()
	@IsNotEmpty()
	question5: number;

	@IsNumber()
	@IsNotEmpty()
	question6: number;

	@IsNumber()
	@IsNotEmpty()
	question7: number;
}
