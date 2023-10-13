import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EvalsComponent } from './evals/evals.component';

const routes: Routes = [
	{
		path: '', component: EvalsComponent
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EvalsRoutingModule {

}
