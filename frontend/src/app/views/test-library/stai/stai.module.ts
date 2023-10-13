import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StaiComponent } from './stai/stai.component';
import { SharedModule } from '../../../shared/shared.module';
import { StaiRoutingModule } from './stai-routing.module';

@NgModule({
	declarations: [StaiComponent],
	imports: [
		CommonModule,
		SharedModule,
		StaiRoutingModule
	],
	exports: [StaiComponent]
})
export class StaiModule {

}
