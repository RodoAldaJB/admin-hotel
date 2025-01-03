import { Component, Input } from '@angular/core';
import { Habitation } from '../../interfaces/lodging';
import { UpperCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-table-list-habitations',
  standalone: true,
  imports: [
    UpperCasePipe,
    RouterModule
  ],
  templateUrl: './table-list-habitations.component.html',
  styleUrl: './table-list-habitations.component.scss'
})
export class TableListHabitationsComponent {

  @Input({ required : true}) habitations!: Habitation[];

  /*images: any[] = [];

  constructor(){
    this.habitations.forEach(element => {
      let temp = (element.type.images).split(',')
      
      this.images.push(temp[0]);
    });
  }*/

}
