import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent {

  isLoading: boolean = false;

  @Input()
  formIsValid: boolean | null = false;

  @Output()
  onSubmit: EventEmitter<boolean> = new EventEmitter<boolean>();

  public fakeSubmit() {
    this.onSubmit.emit(true);
    this.isLoading = true;
    setTimeout(() => this.isLoading = false, 3000);
  }

}
