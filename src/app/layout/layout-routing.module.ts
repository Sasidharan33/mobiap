import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [{
  path:'',
  component:LayoutComponent,
  children:[
    {
      path:'',
      loadChildren: () => import('./home/home.module').then(m =>m.HomeModule)
    },
    {
      path:'',
      loadChildren: () => import('./topbar/topbar.module').then(m=>m.TopbarModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }