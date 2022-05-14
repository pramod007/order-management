import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'order-management-system';


  constructor(private auth:AuthService,private router:Router){
    if(Object.keys(this.auth.getUser()).length){
      this.router.navigate(['orders/order-list'])
    }else{
      localStorage.clear()
      this.router.navigate(['login'])
    }
  }
}
