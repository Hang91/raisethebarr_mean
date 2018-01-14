import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { ReactComponent } from './react';
import { ProfileComponent } from './profile';
//import { angularProfileCard } from '../../components/main-profile/index';
import { NoContentComponent } from './no-content';
import { FaqComponent } from './faq';
import { FaqComponent } from './faq/faq.component';
import { FaqStartComponent } from './faq/faq-start/faq-start.component';
import { FaqListComponent } from './faq/faq-list/faq-list.component';
import { FaqItemComponent } from './faq/faq-list/faq-item/faq-item.component';
import { FaqDetailComponent } from './faq/faq-detail/faq-detail.component';
import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'posts', loadChildren: './posts#PostsModule' },
  { path: 'profile', component: ProfileComponent },
  { path: 'react', component: ReactComponent },
  { path: 'faq', component: FaqComponent, children: [
    { path: '', component: FaqStartComponent },
    { path: ':id', component: FaqDetailComponent },
  ]},
  { path: '**',    component: NoContentComponent },
];
