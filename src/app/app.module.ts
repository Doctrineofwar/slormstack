import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlormToolsComponent } from './core/components/slorm-tools/slorm-tools.component';
import { MaterialModule } from './modules/shared/material.module';
import { SlormApiModule } from './modules/slorm-api/slorm-api.module';
import { BuildErrorHandler } from './modules/slorm-planner/handler/error-handler';
import { SlormLegendaryModule } from './modules/slorm-legendary/slorm-legendary.module';

@NgModule({
    declarations: [
        AppComponent,
        SlormToolsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SlormApiModule,
        AppRoutingModule,
        MaterialModule,
        HttpClientModule,
        SlormLegendaryModule
    ],
    bootstrap: [AppComponent],
    providers: [
        {provide: ErrorHandler, useClass: BuildErrorHandler }
    ]
})
export class AppModule { }