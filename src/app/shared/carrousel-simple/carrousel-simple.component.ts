import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrousel-simple',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './carrousel-simple.component.html',
  styleUrl: './carrousel-simple.component.scss'
})
export class CarrouselSimpleComponent {
  currentIndex: number = 0;

  @Input({ required : true}) slides!: string[];  

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

}
