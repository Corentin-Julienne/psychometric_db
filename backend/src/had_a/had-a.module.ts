import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HadA } from './entities/had_a.entity';

@Module({
	imports: [TypeOrmModule.forFeature([HadA])]
})
export class HadAModule {

}
