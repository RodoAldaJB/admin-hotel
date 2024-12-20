import { Component, inject, OnInit } from '@angular/core';
import { ClientsService } from '../../../../services/clients.service';
import { TypeHabitation } from '../../../../interfaces/lodging';
import { ActivatedRoute } from '@angular/router';
import { DragAndDropComponent } from '../../../../shared/drag-and-drop/drag-and-drop.component';

@Component({
  selector: 'app-edit-type-room',
  standalone: true,
  imports: [
    DragAndDropComponent
  ],
  templateUrl: './edit-type-room.component.html'
})
export default class EditTypeRoomComponent implements OnInit{

  data = inject(ClientsService);

  router = inject(ActivatedRoute);

  type? : TypeHabitation;

ngOnInit(): void {
  this.router.params.subscribe( params =>{
    this.data.getTypeHabitation( params['id']).subscribe( resp => {
      this.type = resp;
      console.log(this.type)
    })
  })
}

}
