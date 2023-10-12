import { IsNotEmpty, IsNumber }  from 'class-validator';

export class HadAResponseDto {

	@IsNumber()
	@IsNotEmpty()
	item_1: number;

	@IsNumber()
	@IsNotEmpty()
	item_2: number;

	@IsNumber()
	@IsNotEmpty()
	item_3: number;

	@IsNumber()
	@IsNotEmpty()
	item_4: number;

	@IsNumber()
	@IsNotEmpty()
	item_5: number;

	@IsNumber()
	@IsNotEmpty()
	item_6: number;

	@IsNumber()
	@IsNotEmpty()
	item_7: number;
}
