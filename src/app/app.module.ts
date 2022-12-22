import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModulesComponent } from './shared/modules/modules.component';
import { ServicesComponent } from './shared/services/services.component';
import { ComponentsComponent } from './ui/components/components.component';
import {ToolbarModule} from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { UiComponent } from './ui/ui.component';
import { LayoutModule } from "./layout/layout.module";

@NgModule({
    declarations: [
        AppComponent,
        ModulesComponent,
        ServicesComponent,
        ComponentsComponent,
        UiComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ToolbarModule,
        SplitButtonModule,
        LayoutModule,

    ]
})
export class AppModule { }
