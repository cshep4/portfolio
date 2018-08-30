import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';

const APP_ROUTES: Routes = [
    // { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: HomeComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
