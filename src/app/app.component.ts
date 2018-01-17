/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';
/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <header></header>
    <nav-menu></nav-menu>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  providers: []
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/favicon.ico';
  public name = 'Mean stack starter';
  public url = 'https://mean.io';

  constructor(
    public appState: AppState
  ) { }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
