import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'my-first-app';
  warning = false;
  success = false;

  OpenComponent(type){
  if(type === 'Warning'){
    this.warning = true;
  }
  else if(type === 'Success') {
    this.success = true;
  }
  }
  
}
