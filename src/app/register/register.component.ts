import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    errorCode=false
  errorMessage=''
  private router=inject(Router)
  name=''
  email=''
  password=''
  httpClient=inject(HttpClient)
  onRegister(){
    const subscription=this.httpClient.post("http://localhost:8000/api/register",{
      name:this.name,
      email:this.email,
      password:this.password

    },{withCredentials:true}).subscribe({
    next:(res)=>{
      this.router.navigate(['/home'])
    },
    
  error:(err)=>{
    this.errorCode=true
    this.errorMessage=err.error.message
  }}
  )
    

  }

}
