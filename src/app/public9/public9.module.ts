import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Public9RoutingModule } from './public9-routing.module';
import { Public9Component } from './public9.component';


@NgModule({
  declarations: [
    Public9Component
  ],
  imports: [
    CommonModule,
    Public9RoutingModule
  ]
})
export class Public9Module { }
