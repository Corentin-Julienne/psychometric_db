import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  	selector: 'app-custom-modal',
  	templateUrl: './custom-modal.component.html',
  	styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent {

	@Input() title!: string;
  	@Input() isOpen: boolean = false;
  	@Output() onClose = new EventEmitter<void>();

	close() {
		this.onClose.emit();
	}
}
