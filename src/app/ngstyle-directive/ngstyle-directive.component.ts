import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyle-directive',
  templateUrl: './ngstyle-directive.component.html',
  styleUrls: ['./ngstyle-directive.component.css']
})
export class NgstyleDirectiveComponent {
  active: boolean = false
  fontSize: string = "0"

  changeActive(){
    this.active = !this.active
  }
}
