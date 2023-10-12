import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HadAModule } from './had_a/had-a.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(), 
    HadAModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
