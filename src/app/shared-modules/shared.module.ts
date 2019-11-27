import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';


@NgModule({
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  exports: [
    MaterialModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
  ],
  declarations: []
})
export class SharedModule { }