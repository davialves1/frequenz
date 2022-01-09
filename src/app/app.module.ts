import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { IconLibraryComponent } from './shared/icon-library/icon-library.component';
import { LoginButtonComponent } from './shared/login-button/login-button.component';
import { AlertMessageComponent } from './shared/alert-message/alert-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    LoginFormComponent,
    IconLibraryComponent,
    LoginButtonComponent,
    AlertMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
