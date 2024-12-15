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
  templateUrl: './active.component.html',
  styles: ``
})
export default class ActiveComponent {

  lodgings = inject( ClientsService );
  data: Lodging[] = [];
  
  
  ngOnInit(): void {
    this.lodgings.getReservations().subscribe( (resp) => {
      this.data = resp.filter(value => value.status == 'activo' );

      console.log(this.data)
    })
    
  }

}
