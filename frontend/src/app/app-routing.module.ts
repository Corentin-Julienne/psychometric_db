import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{
		path: '', loadChildren: 
		() => import('./views/landing-page/landing-page.module').then(m => m.LandingPageModule)
	},
	{
		path: 'main', loadChildren:
		() => import('./views/main-page/main-page.module').then(m => m.MainPageModule)
	},
	{
		path: 'tests', loadChildren:
		() => import('./views/tests/tests.module').then(m => m.TestsModule)
	},
	{
		path: 'profile', loadChildren:
		() => import('./views/profile/profile.module').then(m => m.ProfileModule)
	},
	{
		path: 'evals', loadChildren:
		() => import('./views/evals/evals.module').then(m => m.EvalsModule)
	}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {

}
