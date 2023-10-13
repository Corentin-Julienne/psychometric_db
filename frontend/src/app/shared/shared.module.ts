import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from './header/header.component';
import { CustomModalComponent } from './custom-modal/custom-modal.component';

@NgModule({
	declarations: [
    	HeaderComponent,
    	CustomModalComponent
  	],
	imports: [
		CommonModule
	],
	exports: [
		HeaderComponent,
		CustomModalComponent
	]
})
export class SharedModule {

}
