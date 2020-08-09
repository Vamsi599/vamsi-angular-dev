import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { VsignupComponent } from './vsignup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { VsignupRoutingModule } from './vsignup-routing.module';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports:      [ CommonModule, FormsModule , MatFormFieldModule, MatInputModule, VsignupRoutingModule, MatButtonModule, FlexLayoutModule, MatCardModule ],
  declarations: [ VsignupComponent ],
  bootstrap:    [ VsignupComponent ]
})
export class VsignupModule { }
