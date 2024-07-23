import { Component, inject } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
interface LoginResponse {
  data:{
  accessToken: string;
  refreshToken: string;
  name:string;
  email:string;}
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errorCode=false
  errorMessage=''
  httpclient=inject(HttpClient)
  cookieService=inject(CookieService)
  private router=inject(Router)
  email=''
password=''
onSubmit(){
  const subscription=this.httpclient.post<LoginResponse>("http://localhost:8000/api/login",{
    email:this.email,
    password:this.password
  }, { withCredentials: true }).subscribe({
    next:(res)=>{
      this.router.navigate(['/home'])

      
    },
    error:(err)=>{
      this.errorCode=true
      this.errorMessage=err.error.message


    }
  })

 


}
}
