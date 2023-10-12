import { Injectable } from '@nestjs/common';
import { HadAResponseDto } from './dto/had-a-response.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HadA } from './entities/had_a.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HadAService {

	constructor(@InjectRepository(HadA) 
				private hadARepositiory: Repository<HadA>) {};
	
	async saveResultItemOne(hadAResponseDto: HadAResponseDto): Promise<HadA> {
		const item_1 = this.hadARepositiory.create(hadAResponseDto);
		return this.hadARepositiory.save(item_1);
	}

	async saveResultItemTwo(hadAResponseDto: HadAResponseDto): Promise<HadA> {
		const item_2 = this.hadARepositiory.create(hadAResponseDto);
		return this.hadARepositiory.save(item_2);
	}

	async saveResultItemThree(hadAResponseDto: HadAResponseDto): Promise<HadA> {
		const item_3 = this.hadARepositiory.create(hadAResponseDto);
		return this.hadARepositiory.save(item_3);
	}

	async saveResultItemFour(hadAResponseDto: HadAResponseDto): Promise<HadA> {
		const item_4 = this.hadARepositiory.create(hadAResponseDto);
		return this.hadARepositiory.save(item_4);
	}

	async saveResultItemFive(hadAResponseDto: HadAResponseDto): Promise<HadA> {
		const item_5 = this.hadARepositiory.create(hadAResponseDto);
		return this.hadARepositiory.save(item_5);
	}

	async saveResultItemSix(hadAResponseDto: HadAResponseDto): Promise<HadA> {
		const item_6 = this.hadARepositiory.create(hadAResponseDto);
		return this.hadARepositiory.save(item_6);
	}

	async saveResultItemSeven(hadAResponseDto: HadAResponseDto): Promise<HadA> {
		const item_7 = this.hadARepositiory.create(hadAResponseDto);
		return this.hadARepositiory.save(item_7);
	}
}
