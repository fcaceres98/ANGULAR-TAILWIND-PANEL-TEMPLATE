import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';

import { PanelComponent } from './panel.component';
import { SharedModule } from 'src/app/components/control-panel/shared/shared.module';

@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule
  ]
})
export class PanelModule { }
