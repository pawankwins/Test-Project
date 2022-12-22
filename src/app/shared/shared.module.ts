import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesComponent } from './modules/modules.component';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [
    ModulesComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
