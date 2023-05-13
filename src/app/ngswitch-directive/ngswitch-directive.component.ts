import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch-directive',
  templateUrl: './ngswitch-directive.component.html',
  styleUrls: ['./ngswitch-directive.component.css']
})
export class NgswitchDirectiveComponent {
  bgColor: string = "red"

  onChange(event: any){
    this.bgColor = event.target.value
    console.log(this.bgColor)
  }
}
