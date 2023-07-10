import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Public9Component } from './public9.component';

const routes: Routes = [{ path: '', component: Public9Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Public9RoutingModule { }
