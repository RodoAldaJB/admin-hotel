import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {
  userLogin: FormGroup;
  formbuilder = inject(FormBuilder);
  
  submit: boolean = false;
  identify: boolean = false;
  errorSubmit: string = '';

  constructor(private authService: AuthService, private router: Router){
    this.userLogin = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  onSubmit(){

    if (this.userLogin.valid){
      this.authService.login(this.userLogin.value).subscribe( (resp:any) => {
       
        this.errorSubmit = '';
        this.userLogin.reset();
        this.showModal();

        this.authService.setUserDataR(resp.user); // Guarda datos de usuario
        const status = resp.user.status;

        if (status == 0){
          this.errorSubmit = "Usuario suspendido";
          this.showModal();
        } else {

          setTimeout( ()=> {
            this.router.navigate(['/dashboard/reservaciones/pendientes'])
          },2000)
        }

      }, (err) => {

        if( err.error.success == false){
          this.errorSubmit = err.error.message;
        }
        this.showModal();
      })
    }

  }

  showModal(){
    this.submit = true;
  }

  hideModal(){
    this.submit = false;    
  }

  questions() {
  
    if (this.userLogin.controls['email'].invalid) {
      this.identify = true;
    } else {
      
      this.authService.getByEmail(this.userLogin.value).subscribe(
        (resp) => {
          this.authService.setUserDataR(resp);
          this.router.navigate(['/login/identify'])
        },
        (err) => {
          if( err.error.success == false){
            this.errorSubmit = err.error.message;
          }
          this.showModal();
        }
      );
    }
  }
  
}
