import { Component, inject, OnInit } from '@angular/core';
import { TitleComponent } from '../../../../shared/title/title.component';
import { ListTypeHabitationComponent } from '../../../../shared/list-type-habitation/list-type-habitation.component';
import { ClientsService } from '../../../../services/clients.service';
import { TypeHabitation } from '../../../../interfaces/lodging';

@Component({
  selector: 'app-type-room',
  standalone: true,
  imports: [
    TitleComponent,
    ListTypeHabitationComponent
  ],
  templateUrl: './type-room.component.html'
})
export default class TypeRoomComponent implements OnInit{

  data = inject(ClientsService);

  types!: TypeHabitation[];

  ngOnInit(): void {
    this.data.getTypeHabitations().subscribe( resp => {
      console.log(resp);
      this.types = resp;
    })
  }

}
