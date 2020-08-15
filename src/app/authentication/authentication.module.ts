import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';

@NgModule({
  declarations:[AuthenticationComponent],
  imports:      [ BrowserModule, FormsModule , FlexLayoutModule, AuthenticationRoutingModule ],

})
export class AuthenticationModule { }
