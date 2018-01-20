import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core'; //GoogleMap
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { HomeComponent } from './home';
import { ScreenComponent } from './home/screen';
import { RequestComponent } from './home/request';
import { BetaComponent } from './home/beta';
import { ChatboxComponent } from './home/chatbox';
import { CompanyComponent } from './home/company'
import { ServiceComponent } from './home/service'
import { PartnerComponent } from './home/partner'

<<<<<<< HEAD
=======
// import { ReactComponent } from './react';
>>>>>>> upstream/master
//import { angularProfileCard } from '../../components/main-profile/index';
import { FaqComponent } from './faq';
import { FaqStartComponent } from './faq/faq-start/faq-start.component';
import { FaqListComponent } from './faq/faq-list/faq-list.component';
import { FaqItemComponent } from './faq/faq-list/faq-item/faq-item.component';
import { FaqDetailComponent } from './faq/faq-detail/faq-detail.component';
import { AboutUsComponent } from './about-us';
import { ContactUsComponent } from './contact-us';
import { MapComponent } from './contact-us/map';
import { FooterComponent } from './footer';
import { NavMenuComponent } from './navmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChatboxService } from '../services/chatbox.service';
import { SendEmailService } from '../services/sendemail.service';

import '../styles/styles.css';
import '../styles/headings.css';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    ScreenComponent,
    RequestComponent,
    BetaComponent,
    ChatboxComponent,
    CompanyComponent,
    ServiceComponent,
    PartnerComponent,
<<<<<<< HEAD
=======
    // ReactComponent,
>>>>>>> upstream/master
    FaqComponent,
    FaqStartComponent,
    FaqListComponent,
    FaqItemComponent,
    FaqDetailComponent,
    AboutUsComponent,
    ContactUsComponent,
    MapComponent,
    FooterComponent,
    NavMenuComponent,
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules }),
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: '' //google map api client key
    })
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    ENV_PROVIDERS,
    APP_PROVIDERS,
    SendEmailService,
    ChatboxService
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public appState: AppState
  ) { }

  public hmrOnInit(store: StoreType) {
    if (!store || !store.state) {
      return;
    }
    console.log('HMR store', JSON.stringify(store, null, 2));
    /**
     * Set state
     */
    this.appState._state = store.state;
    /**
     * Set input values
     */
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    /**
     * Save state
     */
    const state = this.appState._state;
    store.state = state;
    /**
     * Recreate root elements
     */
    store.disposeOldHosts = createNewHosts(cmpLocation);
    /**
     * Save input values
     */
    store.restoreInputValues = createInputTransfer();
    /**
     * Remove styles
     */
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    /**
     * Display new elements
     */
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
