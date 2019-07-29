import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MainRoutingModule } from './main-routing.module';
import { LeftControlComponent } from './left-control/left-control.component';

@NgModule({
  declarations: [MainComponent, LeftControlComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    NgZorroAntdModule,
    MainRoutingModule
  ]
})
export class MainModule { }
