import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [SetupComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    NgZorroAntdModule
  ]
})
export class SetupModule { }
