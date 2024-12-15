import { Component, inject } from '@angular/core';
import { TitleComponent } from '../../../../shared/title/title.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientsService } from '../../../../services/clients.service';
import { TypeHabitation } from '../../../../interfaces/lodging';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './new-room.component.html',
  styles: ``
})
export default class NewRoomComponent {

  newHabitation : FormGroup;
  formbuilder = inject(FormBuilder);

  data = inject(ClientsService);
  typeHabitations! : TypeHabitation[];

  errorSubmit: string = '';
  submit: boolean = false;

  constructor(){
    this.newHabitation = this.formbuilder.group({
      id_type_habitation: ['', Validators.required],
      number: ['', Validators.required],
      adults: ['', Validators.required],
      children: ['', Validators.required],
      description: [''],
      status: ['0']
    });

    this.data.getTypeHabitation().subscribe( resp => {
      this.typeHabitations = resp;
    })
  }

  onSubmit(){
    if (this.newHabitation.valid) {
      this.data.setHabitation(this.newHabitation.value).subscribe(resp =>{
        console.log(resp);
        this.errorSubmit = '';
        this.newHabitation.reset();
        this.showModal();

      }, (err) => {
        this.errorSubmit = err.error.error;
        this.showModal();
      })
    }
  }

  showModal(){
    this.submit = true;
  }

  hideModal(){
    this.submit = false;
    setTimeout( ()=> {
      this.errorSubmit = '';
    },2000)
  }

}
