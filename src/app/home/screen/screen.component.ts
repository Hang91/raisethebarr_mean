import { Component } from '@angular/core';

@Component({
  selector: 'home-screen',  
  styleUrls: [ './screen.component.css' ],
  templateUrl: './screen.component.html'
})
export class ScreenComponent {
  hideDemo = true;
  hideChat = true;
  hideBeta = true;
}