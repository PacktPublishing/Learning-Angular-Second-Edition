import { AnimationBuilder, style, animate } from '@angular/animations';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'example-builder',
  template: `
  <p class="text">Animate this text</p>
  <button (click)="play()">Play animation</button>
  `,
  styles: [`
    .text {
      background: green;
    }
  `]
})
export class ExampleBuilderComponent implements OnInit {
  animationPlayer;

  constructor(
    private animationBuilder: AnimationBuilder,
    private elementRef: ElementRef
  ) {
  }

  ngOnInit() {
    const animationFactory = this.animationBuilder.build([
      style({ width: '0px' }), // set starter value
      animate(1000, style({ width: '200px' })) // animate to this new value
    ]);

    const elem = this.elementRef.nativeElement.querySelector('.text');
    this.animationPlayer = animationFactory.create(elem);
  }

  play() {
    this.animationPlayer.play();
  }
}
