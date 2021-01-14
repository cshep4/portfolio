import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppNavbarComponent} from './app-navbar/app-navbar.component';
import {PreloaderComponent} from './preloader/preloader.component';
import {routing} from './app.routing';
import {HomeModule} from './home/home.module';
import {FooterComponent} from './footer/footer.component';
import {JsonReaderService} from './service/json-reader-service';
import {HttpClientModule} from '@angular/common/http';
import {ContactService} from './service/contact-service';
import {PortfolioModule} from './portfolio/portfolio.module';
import {UserCountService} from './service/user-count-service';
import {VisitorService} from './service/visitor-service';

@NgModule({
  declarations: [
    PreloaderComponent,
    AppNavbarComponent,
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    HomeModule,
    PortfolioModule
  ],
  providers: [
    JsonReaderService,
    ContactService,
    VisitorService,
    UserCountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
