import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HadComponent } from './had/had.component';

const routes: Routes = [
	{
		path: '', component: HadComponent
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HadRoutingModule {

}
