import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass-directive',
  templateUrl: './ngclass-directive.component.html',
  styleUrls: ['./ngclass-directive.component.css']
})
export class NgclassDirectiveComponent {
  hasLiked: boolean = false;
  toggleLike(){
    this.hasLiked = !this.hasLiked
  }
}
