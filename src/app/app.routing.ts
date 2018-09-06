import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PortfolioPageComponent} from './portfolio/portfolio.component';

const APP_ROUTES: Routes = [
    // { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'portfolio', component: PortfolioPageComponent },
    { path: 'portfolio/:name', component: PortfolioPageComponent },
    { path: '**', component: HomeComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES, { useHash: false });
