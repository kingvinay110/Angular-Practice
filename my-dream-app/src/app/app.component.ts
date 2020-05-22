import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "vineeth";
  Display = false;
  count =[];
  click = 0;
  limit = 5;

  DisplayDetails() {
    this.click++;
    this.count.push(this.click);
    this.Display = !this.Display;
  }

  setColor(i: number): string {
    if (i >= this.limit) {
      return 'blue';
    } else {
      return 'white';
    }
  }

  
}
