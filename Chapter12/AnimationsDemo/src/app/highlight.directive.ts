import { Directive, OnInit, ElementRef } from "@angular/core";
import { AnimationBuilder, style, animate } from "@angular/animations";

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {
  constructor(
    private elementRef: ElementRef,
    private animationBuilder: AnimationBuilder
  ) { }

  ngOnInit() {
    const animation = this.animationBuilder.build([
      style({ width: '0px' }),
      animate(1000, style({ width: '100px' }))
    ]);
    const player = animation.create(this.elementRef.nativeElement);
    player.play();
  }
}
