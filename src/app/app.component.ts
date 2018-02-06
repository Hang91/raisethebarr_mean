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
    <div [ngStyle]="{'min-height': clientHeight + 'px', 'margin-bottom': '-60px'}"> 
          <!-- 'margin-bootom': '-FooterHeight' -->
    <nav-menu></nav-menu> 
          <!-- Your Navbar here -->
    <router-outlet></router-outlet>
    <div style="height: 60px"></div> 
          <!-- 60px is FooterHeight  this will push 
          the footer so it will not overlap if you have very long content  -->
    </div>
    <app-footer></app-footer>
  `,
  providers: []
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/favicon.ico';
  public name = 'Mean stack starter';
  public url = 'https://mean.io';
  clientHeight: number;
  constructor( 
    public appState: AppState
  ) {
    this.clientHeight = window.innerHeight; 
    }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
