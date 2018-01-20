import { Routes } from '@angular/router';
import { HomeComponent } from './home';
//import { angularProfileCard } from '../../components/main-profile/index';
import { FaqComponent } from './faq';
import { FaqStartComponent } from './faq/faq-start/faq-start.component';
import { FaqListComponent } from './faq/faq-list/faq-list.component';
import { FaqItemComponent } from './faq/faq-list/faq-item/faq-item.component';
import { FaqDetailComponent } from './faq/faq-detail/faq-detail.component';
import { AboutUsComponent } from './about-us';
import { ContactUsComponent } from './contact-us';
import { MapComponent } from './contact-us/map';
//import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'faq', component: FaqComponent, children: [
    { path: '', component: FaqStartComponent },
    { path: ':id', component: FaqDetailComponent },
  ]},
  { path: '**',    redirectTo: 'home' },
];
