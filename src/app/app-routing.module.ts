import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [{path:'',component:LandingpageComponent}, { path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) }, { path: 'public1', loadChildren: () => import('./public2/public2.module').then(m => m.Public2Module) }, { path: 'public4', loadChildren: () => import('./public9/public9.module').then(m => m.Public9Module) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
