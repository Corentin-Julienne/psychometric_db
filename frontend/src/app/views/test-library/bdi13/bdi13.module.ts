import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Bdi13Component } from './bdi13/bdi13.component';
import { SharedModule } from '../../../shared/shared.module';
import { Bdi13RoutingModule } from './bdi13-routing.module';

@NgModule({
	declarations: [Bdi13Component],
	imports: [
		CommonModule,
		SharedModule,
		Bdi13RoutingModule
	],
	exports: [Bdi13Component]
})
export class Bdi13Module {

}
