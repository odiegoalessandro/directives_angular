import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {
  @HostListener("mouseenter") onMouseEnter(){
    this.elementBgColor = this.backgroundColor.highlightColor
  }
  @HostListener("mouseleave") onMouseLeave(){
    this.elementBgColor = this.backgroundColor.defaultColor
  }

  @HostBinding("style.background") elementBgColor!: string

  @Input("highlight") backgroundColor!: highlightObject

  ngOnInit(): void {
    this.elementBgColor = this.backgroundColor.defaultColor
  }
}
