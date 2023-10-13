import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestsComponent } from './tests/tests.component';
import { EvalCardComponent } from './eval-card/eval-card.component';
import { EvalCardsComponent } from './eval-cards/eval-cards.component';
import { SharedModule } from '../../shared/shared.module';
import { TestsRoutingModule } from './tests-routing.module';

@NgModule({
	declarations: [
		TestsComponent,
		EvalCardComponent,
		EvalCardsComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		TestsRoutingModule
	],
	exports: [
		TestsComponent,
		EvalCardComponent,
		EvalCardsComponent
	]
})
export class TestsModule {

}
