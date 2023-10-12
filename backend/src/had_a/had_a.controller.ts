import { Controller, Post, Body } from '@nestjs/common';
import { HadAService } from './had_a.service';
import { HadAResponseDto } from './dto/had-a-response.dto';

@Controller('had-a')
export class HadAController {
	
	constructor(private readonly hadAService: HadAService) {};

	@Post()
	async createItemOneResponse(@Body() hadAResponseDto: HadAResponseDto) {
		return this.hadAService.saveResultItemOne(hadAResponseDto);
	}

	@Post()
	async createItemTwoResponse(@Body() hadAResponseDto: HadAResponseDto) {
		return this.hadAService.saveResultItemTwo(hadAResponseDto);
	}

	@Post()
	async createItemThreeResponse(@Body() hadAResponseDto: HadAResponseDto) {
		return this.hadAService.saveResultItemThree(hadAResponseDto);
	}

	@Post()
	async createItemFourResponse(@Body() hadAResponseDto: HadAResponseDto) {
		return this.hadAService.saveResultItemFour(hadAResponseDto);
	}

	@Post()
	async createItemFiveResponse(@Body() hadAResponseDto: HadAResponseDto) {
		return this.hadAService.saveResultItemFive(hadAResponseDto);
	}

	@Post()
	async createItemSixResponse(@Body() hadAResponseDto: HadAResponseDto) {
		return this.hadAService.saveResultItemSix(hadAResponseDto);
	}

	@Post()
	async createItemSevenResponse(@Body() hadAResponseDto: HadAResponseDto) {
		return this.hadAService.saveResultItemSeven(hadAResponseDto);
	}
}
