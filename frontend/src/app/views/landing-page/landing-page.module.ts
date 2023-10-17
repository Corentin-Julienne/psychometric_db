import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { HeaderLpComponent } from './header-lp/header-lp.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
	declarations: [
		LandingPageComponent,
		HeaderLpComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		ReactiveFormsModule,
		LandingPageRoutingModule
	],
	exports: [
		LandingPageComponent,
		HeaderLpComponent
	]
})
export class LandingPageModule {

}
