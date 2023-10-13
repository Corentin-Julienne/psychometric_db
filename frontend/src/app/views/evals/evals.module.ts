import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EvalsComponent } from './evals/evals.component';
import { QuestionnaireCardComponent } from './questionnaire-card/questionnaire-card.component';
import { QuestionaireCardsComponent } from "./questionnaire-cards/questionaire-cards.component";
import { EvalsRoutingModule } from './evals-routing.module';

@NgModule({
	declarations: [
		EvalsComponent,
		QuestionnaireCardComponent,
		QuestionaireCardsComponent
	],
	imports: [
		CommonModule,
		EvalsRoutingModule
	],
	exports: [
		EvalsComponent,
		QuestionnaireCardComponent,
		QuestionaireCardsComponent
	]
})
export class EvalsModule {

}
