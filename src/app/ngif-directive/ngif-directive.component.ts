import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ngif-directive',
  templateUrl: './ngif-directive.component.html',
  styleUrls: ['./ngif-directive.component.css'],
})
export class NgifDirectiveComponent {
  @ViewChild("courseInput") courseInput!: ElementRef
  courses: string[] = [];

  addCourse(){
    this.courses.push(this.courseInput.nativeElement.value)
    this.courseInput.nativeElement.value = ""
  }
}
