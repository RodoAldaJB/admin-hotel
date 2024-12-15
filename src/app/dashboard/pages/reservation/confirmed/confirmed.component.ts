import { Component, inject } from '@angular/core';
import { ClientsService } from '../../../../services/clients.service';
import { Lodging } from '../../../../interfaces/lodging';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    DatePipe,
    UpperCasePipe
  ],
  templateUrl: './confirmed.component.html',
  styles: ``
})
export default class ConfirmedComponent {

  lodgings = inject( ClientsService );
  data!: Lodging[];
  
  
  ngOnInit(): void {
    this.lodgings.getReservations().subscribe( (resp) => {
      this.data = resp.filter(value => value.status == 'confirmado' );

      console.log(this.data)
    })
    
  }

}
