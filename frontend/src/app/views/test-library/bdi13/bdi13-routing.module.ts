import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Bdi13Component } from './bdi13/bdi13.component';

const routes: Routes = [
	{
		path: '', component: Bdi13Component
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class Bdi13RoutingModule {

}
