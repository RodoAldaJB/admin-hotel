import { Component, Input } from '@angular/core';
import { Habitation, TypeHabitation } from '../../interfaces/lodging';
import { RouterModule } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { CarrouselSimpleComponent } from '../carrousel-simple/carrousel-simple.component';

@Component({
  selector: 'app-list-type-habitation',
  standalone: true,
  imports: [
    RouterModule,
    UpperCasePipe,
    CarrouselSimpleComponent
  ],
  templateUrl: './list-type-habitation.component.html',
  styleUrl: './list-type-habitation.component.scss'
})
export class ListTypeHabitationComponent {

  @Input({ required : true}) types!: TypeHabitation[];

}
