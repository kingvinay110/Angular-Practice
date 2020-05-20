import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  DataBinding : FormGroup;
  username="Vineeth";

  ngOnInit() {
    this.createForm();
  }

  createForm(){
  this.DataBinding = new FormGroup({
  UserName: new FormControl('')
  });
}

  IsDisable() {
    if(this.DataBinding.get('UserName').value.length === 0)
    {
      return true;
    }
  }

  reset() {
    this.username='';
  }
}
