import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
@Input()  defaultColor:string = 'transparent';
@Input('appBetterHighlight') highlightColor:string = 'blue';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {

   }
  
   @HostBinding('style.backgroundColor') backgroundColor:string;

  
   ngOnInit() {
     //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false);
    
     
   }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }
}
