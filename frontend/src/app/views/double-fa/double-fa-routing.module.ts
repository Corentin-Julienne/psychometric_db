import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DoubleFaRegisterComponent } from './double-fa-register/double-fa-register.component';
import { DoubleFaLoginComponent } from './double-fa-login/double-fa-login.component';

const routes: Routes = [
	{
		path: 'register', component: DoubleFaRegisterComponent		
	},
	{
		path: 'login', component: DoubleFaLoginComponent 
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DoubleFaRoutingModule {

}
