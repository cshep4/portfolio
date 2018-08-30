import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppNavbarComponent} from './app-navbar/app-navbar.component';
import {PreloaderComponent} from './preloader/preloader.component';
import {TopHeaderComponent} from './top-header/top-header.component';
import {LeftSidebarComponent} from './left-sidebar/left-sidebar.component';
import {routing} from './app.routing';
import {HomeModule} from './home/home.module';

@NgModule({
  declarations: [
    PreloaderComponent,
    TopHeaderComponent,
    LeftSidebarComponent,
    AppNavbarComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
