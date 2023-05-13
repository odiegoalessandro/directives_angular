import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
  // Usando apenas HostListener
  // @HostListener("mouseenter") onMouseOver(){
  //   this._renderer.setStyle(this._elementRef.nativeElement, "background-color", "yellow")
  // }

  // @HostListener("mouseleave") onMouseLeave(){
  //   this._renderer.setStyle(this._elementRef.nativeElement, "background-color", "white")
  // }
  // constructor(
  //   private _elementRef: ElementRef,
  //   private _renderer: Renderer2
  // ) { }

  // Usando HostListener e HostBinding

  @HostListener("mouseenter") onMouseOver(){
    this.elementBgColor = "yellow"
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.elementBgColor = "white"
  }

  @HostBinding("style.backgroundColor") elementBgColor!: string;
}
