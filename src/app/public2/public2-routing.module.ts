import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Public2Component } from './public2.component';

const routes: Routes = [{ path: '', component: Public2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Public2RoutingModule { }
