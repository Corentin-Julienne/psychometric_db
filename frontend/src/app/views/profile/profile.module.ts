import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileComponent } from './profile/profile.component';
import { SecurityComponent } from './security/security.component';
import { UserCardComponent } from './user-card/user-card.component';
import { SharedModule } from '../../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
	declarations: [
		ProfileComponent,
		SecurityComponent,
		UserCardComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		ProfileRoutingModule
	],
	exports: [
		ProfileComponent,
		SecurityComponent,
		UserCardComponent
	]
})
export class ProfileModule {

}
