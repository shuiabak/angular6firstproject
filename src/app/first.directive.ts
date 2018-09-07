import { Directive, AfterViewInit,ElementRef ,Input,HostListener} from '@angular/core';

@Directive({
  selector: '[appFirst]'
})
export class FirstDirective implements AfterViewInit {

  constructor( private eleref : ElementRef) {
   
   }

   @Input()appFirst:string;
   ngAfterViewInit(){
     this.eleref.nativeElement.style.color='red';
   }

   @HostListener('mouseover') onmouseover(){
    this.eleref.nativeElement.style.color=this.appFirst;
   }
   
}
