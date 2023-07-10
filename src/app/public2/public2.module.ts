import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Public2RoutingModule } from './public2-routing.module';
import { Public2Component } from './public2.component';


@NgModule({
  declarations: [
    Public2Component
  ],
  imports: [
    CommonModule,
    Public2RoutingModule
  ]
})
export class Public2Module { }
