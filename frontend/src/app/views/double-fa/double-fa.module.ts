import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DoubleFaRegisterComponent } from './double-fa-register/double-fa-register.component';
import { DoubleFaLoginComponent } from './double-fa-login/double-fa-login.component';
import { DoubleFaRoutingModule } from './double-fa-routing.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
	declarations: [
    	DoubleFaRegisterComponent,
       	DoubleFaLoginComponent
  	],
	imports: [
		CommonModule,
		DoubleFaRoutingModule,
		HttpClient
	],
	exports: [
		DoubleFaRegisterComponent,
		DoubleFaLoginComponent
	]
})
export class DoubleFAModule {

}
