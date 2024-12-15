import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    TitleComponent
  ],
  templateUrl: './reservation.component.html',
  styles: ``
})
export default class ReservationComponent {

}
