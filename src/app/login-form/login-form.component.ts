import {Component,} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent {

  public loginForm: FormGroup;

  public emailInitialMessage = 'Enter your email';

  public passwordInitialMessage = 'Enter your password';

  public errorEmail = 'Enter a valid email.';

  public errorPassword = 'Password must contain at least 8 characters.';

  public fieldPasswordType: 'text' | 'password' = 'text';

  public formFreeze: boolean = false;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl({value: this.emailInitialMessage, disabled: false}, {
          updateOn: 'blur',
          validators: Validators.compose(
            [
              Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
              Validators.required,
              Validators.minLength(5),
            ]),
        },
      ),
      password: new FormControl(this.passwordInitialMessage, {
        validators: Validators.compose(
          [
            Validators.required,
            Validators.minLength(8)
          ],
        )
      })
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  public onSubmit(): void {
    this.loginForm.disable()
    setTimeout(() => this.loginForm.enable(), 3000);
    console.log(this.loginForm.getRawValue());
  }

  public togglePasswordTextVisibility(passwordInput: HTMLInputElement): void {
    passwordInput.type === 'text' ? this.fieldPasswordType = 'password' : this.fieldPasswordType = 'text';
    if (this.fieldPasswordType === 'password' && this.loginForm.get('password')?.value === this.passwordInitialMessage) {
      this.resetInput(passwordInput);
    }
  }

  public emailFocus(input: HTMLInputElement): void {
    const isEmailChanged = input.value !== this.loginForm.get('email')?.value;
    if (!isEmailChanged) {
      this.resetInput(input);
    }
  }

  public emailFocusOut(input: HTMLInputElement): void {
    if (!input.value) {
      this.loginForm.get('email')?.patchValue(this.emailInitialMessage);
    } else {
      const sanitizedEmail = input.value.toLowerCase().replace(/\s/g, '');
      this.loginForm.get('email')?.patchValue(sanitizedEmail);
    }
  }

  public passwordFocus(input: HTMLInputElement) {
    this.fieldPasswordType = 'password';
    this.resetInput(input);
  }

  public passwordFocusOut(input: HTMLInputElement) {
    if (!input.value && this.fieldPasswordType === 'text') {
      this.loginForm.get('password')?.patchValue(this.passwordInitialMessage);
    }
  }

  private resetInput(input: HTMLInputElement): void {
    const inputIsDirty: boolean = !this.loginForm.get(input.id)?.dirty;
    if (inputIsDirty) {
      this.loginForm.get(input.id)?.reset();
    }
  }

  public eyeOpenOrClose(): 'eye-open' | 'eye-closed' {
    return this.fieldPasswordType === 'text' ? 'eye-closed' : 'eye-open';
  }

}
