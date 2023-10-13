import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HadComponent } from './had/had.component';
import { SharedModule } from '../../../shared/shared.module';
import { HadRoutingModule } from './had-routing.module';

@NgModule({
	declarations: [HadComponent],
	imports: [
		CommonModule,
		SharedModule,
		HadRoutingModule
	],
	exports: [HadComponent]
})
export class HadModule {

}
