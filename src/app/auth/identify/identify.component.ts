import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-identify',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './identify.component.html',
  styleUrl: './identify.component.scss'
})
export default class IdentifyComponent implements OnInit{
  userIdentify: FormGroup;
  userUpdatePassword: FormGroup;
  formbuilder = inject(FormBuilder);
  
  submit: boolean = false;
  showNewPassword = false;
  errorSubmit: string = '';

  userDataR: any;

  constructor(private authService: AuthService, private router: Router){
    this.userIdentify = this.formbuilder.group({
      answer1: ['', Validators.required],
      answer2: ['', Validators.required]
    });

    this.userUpdatePassword = this.formbuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordRepeat: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
    this.authService.userDataR$.subscribe(data => {
      this.userDataR = data; 

      if( !this.userDataR){
        this.router.navigate(['/login'])
      }
    });
  }

  onSubmit(){

    if (this.userIdentify.valid){
      if(this.userIdentify.value.answer1 == this.userDataR.answer1 && this.userIdentify.value.answer2 == this.userDataR.answer2){
        this.showNewPassword = true;
      }
      else{
        this.errorSubmit = "Respuestas no validas";
        this.showModal();
      }

      /*this.authService.login(this.userIdentify.value).subscribe( resp => {
       
        this.errorSubmit = '';
        this.userIdentify.reset();
        this.showModal();
        setTimeout( ()=> {
          this.router.navigate(['/login'])
        },2000)
      }, (err) => {

        if( err.error.success == false){
          this.errorSubmit = err.error.message;
        }
        this.showModal();
      })*/
    }

  }

  onSubmitNewPassword(){
    
    const userUpdate = {
      ...this.userDataR,
      password: this.userUpdatePassword.value.password
    }
 

    this.authService.updatePassword(userUpdate.id, userUpdate).subscribe( resp => {
      this.errorSubmit = '';
      this.userUpdatePassword.reset();
      this.showModal();
      setTimeout( ()=> {
        this.router.navigate(['/login'])
      },2000)
    }, (err) =>{
      
      this.errorSubmit = err.error.message;
      
      this.showModal();
    })
  }

  showModal(){
    this.submit = true;
  }

  hideModal(){
    this.submit = false;    
  }
}
