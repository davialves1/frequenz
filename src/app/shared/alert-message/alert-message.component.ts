import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent {

  @Input()
  errorMessage: string = '';

  @Input()
  displayErrorMessage: boolean | null = false;

}
