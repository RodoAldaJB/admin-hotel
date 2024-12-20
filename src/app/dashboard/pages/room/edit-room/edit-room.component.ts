import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ClientsService } from '../../../../services/clients.service';
import { Habitation, TypeHabitation } from '../../../../interfaces/lodging';
import { TitleComponent } from '../../../../shared/title/title.component';
import { NgClass, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-edit-room',
  standalone: true,
  imports: [
    TitleComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgClass,
    UpperCasePipe
  ],
  templateUrl: './edit-room.component.html'
})
export default class EditRoomComponent {

  pathHabitation : FormGroup;
  formbuilder = inject(FormBuilder);
  router = inject(ActivatedRoute)

  errorSubmit: string = '';
  submit: boolean = false;
  editType: boolean = false;
  editStatus: boolean = false;

  data = inject(ClientsService);
  typeHabitations! : TypeHabitation[];
  habitation?: Habitation;

  constructor(){
    this.pathHabitation = this.formbuilder.group({
      id_type_habitation: ['', Validators.required],
      id_lodging: [''],
      number: ['', Validators.required],
      adults: ['', Validators.required],
      children: ['', Validators.required],
      description: [''],
      status: ['', Validators.required]
    });

    this.data.getTypeHabitations().subscribe( resp => {
      this.typeHabitations = resp;
    })

    this.router.params.subscribe( params => {
      this.data.getHabitation(params['id']).subscribe( resp => {
        this.habitation = resp;
        
        //Llenando campos del formulario
        this.pathHabitation.patchValue({
          id_type_habitation: this.habitation?.type_habitation.id,
          id_lodging: this.habitation?.lodging?.id ? this.habitation.lodging.id : null,
          number: this.habitation?.number,
          adults: this.habitation?.adults,
          children: this.habitation?.children,
          description: this.habitation?.description,
          status: this.habitation?.status
        })

        if (this.habitation?.status == '') this.editStatus = true;
      })
    })

    
  }

  onSubmit(){
    
    if (this.pathHabitation.valid){
      
      
      this.data.updateHabitation(this.habitation?.id, this.pathHabitation.value).subscribe( resp => {
        this.errorSubmit = '';
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
