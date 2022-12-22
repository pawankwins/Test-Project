import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidebarDirective } from './sidebar.directive';
import { SidebarComponent } from './sidebar/sidebar.component';

var components = [
  FooterComponent,
  HeaderComponent,
  PageNotFoundComponent,
  SidebarComponent,
]

@NgModule({
  declarations: [
    components,
    SidebarDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    components,
  ]
})
export class LayoutModule { }
