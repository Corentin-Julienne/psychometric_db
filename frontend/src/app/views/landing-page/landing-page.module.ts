import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { HeaderLpComponent } from './header-lp/header-lp.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';

@NgModule({
	declarations: [
		LandingPageComponent,
		HeaderLpComponent
	],
	imports: [
		CommonModule,
		LandingPageRoutingModule
	],
	exports: [
		LandingPageComponent,
		HeaderLpComponent
	]
})
export class LandingPageModule {

}
