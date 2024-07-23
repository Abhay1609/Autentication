import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  httpCient=inject(HttpClient)
  router=inject(Router)
  logout(){
    const subscriber=this.httpCient.post("http://localhost:8000/api/logout",{}, { withCredentials: true }).subscribe({
      next:(res)=>{
        this.router.navigate(['/login'])
      },
    error:(err)=>{
      console.log(err)
    }}
    )

  }

}
