import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

loggedUserdata:any;

  constructor(private router: Router){
  const localData = localStorage.getItem('hotelUser');
  if(localData != null){
   this.loggedUserdata = JSON.parse(localData);
  }
  }

  onLogout(){
    localStorage.removeItem('hotelUser');
    this.loggedUserdata= undefined;
    this.router.navigateByUrl('/login');
  }

}
