import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaiComponent } from './stai/stai.component';

const routes: Routes = [
	{
		path: '', component: StaiComponent
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StaiRoutingModule {

}
