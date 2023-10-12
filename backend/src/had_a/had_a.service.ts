import { Injectable } from '@nestjs/common';
import { HadAResponseDto } from './dto/had-a-response.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Had_A } from './entities/had_a.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HadAService {

	constructor(@InjectRepository(Had_A) 
				private  had_aRepositiory: Repository<Had_A>) {};
	
	async saveResultItemOne(hadAResponseDto: HadAResponseDto): Promise<Had_A> {
		const item_1 = this.had_aRepositiory.create(hadAResponseDto);
		return this.had_aRepositiory.save(item_1);
	}

	async saveResultItemTwo(hadAResponseDto: HadAResponseDto): Promise<any> {

	}

	async saveResultItemThree(hadAResponseDto: HadAResponseDto): Promise<any> {

	}

	async saveResultItemFour(hadAResponseDto: HadAResponseDto): Promise<any> {

	}

	async saveResultItemFive(hadAResponseDto: HadAResponseDto): Promise<any> {

	}

	async saveResultItemSix(hadAResponseDto: HadAResponseDto): Promise<any> {

	}

	async saveResultItemSeven(hadAResponseDto: HadAResponseDto): Promise<any> {

	}
}
