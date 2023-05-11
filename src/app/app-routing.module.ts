import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PanelComponent } from './components/control-panel/layouts/panel/panel.component';
import { NotFoundComponent } from './components/control-panel/shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
  }, {
    path: '404',
    component: NotFoundComponent
  }, {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
