import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { VsignupComponent } from './vsignup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { VsignupRoutingModule } from './vsignup-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports:      [ CommonModule, FormsModule , MatFormFieldModule, MatInputModule, VsignupRoutingModule ],
  declarations: [ VsignupComponent ],
  bootstrap:    [ VsignupComponent ]
})
export class VsignupModule { }
