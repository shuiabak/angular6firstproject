import { Directive, AfterViewInit,ElementRef, Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements AfterViewInit{

  @Input('appColor') color:string;
  constructor(private eleRef: ElementRef) { }

  @HostListener('mouseover') onMouseOver()
{
  this.changeColor();
}

@HostListener('mouseleave') onMouseLeave()
{
  this.changeColor();
}
changeColor(){
  this.eleRef.nativeElement.style.color=this.getRandomColor();
}

 getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

  ngAfterViewInit(){
        console.log(this.eleRef,"this.eleRef");
          this.eleRef.nativeElement.style.color=this.color;
  }

}
