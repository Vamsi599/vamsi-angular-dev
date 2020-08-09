import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CommonModule } from '@angular/common';
import { VloginComponent } from './vlogin.component';
import { VloginRoutingModule } from './vlogin-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports:  [ CommonModule, FormsModule , MatFormFieldModule, MatInputModule, VloginRoutingModule , MatButtonModule],
  declarations: [ VloginComponent ],
  bootstrap:    [ VloginComponent ]
})
export class VloginModule { }
