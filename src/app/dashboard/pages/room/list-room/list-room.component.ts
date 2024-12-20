import { Component, inject } from '@angular/core';
import { TitleComponent } from '../../../../shared/title/title.component';
import { TableListHabitationsComponent } from '../../../../shared/table-list-habitations/table-list-habitations.component';
import { Habitation } from '../../../../interfaces/lodging';
import { ClientsService } from '../../../../services/clients.service';
import { RouterLink } from '@angular/router';

interface State{
  Habitations: Habitation[]
}

@Component({
  standalone: true,
  imports: [
    TitleComponent,
    TableListHabitationsComponent,
    RouterLink
  ],
  templateUrl: './list-room.component.html',
  styles: ``
})
export default class ListComponent {

  data = inject(ClientsService);

  habitations!: Habitation[];

  ngOnInit(): void {
    this.data.getListHabitations().subscribe(resp => {

      this.habitations = resp;

    })
  }

}
