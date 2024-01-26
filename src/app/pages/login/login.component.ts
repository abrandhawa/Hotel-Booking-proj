import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { iLogin } from '../../models/hotel';
import { FormsModule } from '@angular/forms';
import { RoomService } from '../../service/room.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

loginObj: iLogin = {
  phone:'',
  password:''
}

constructor(private roomSrv: RoomService, private route: Router){

}

ngOnInit(): void {
  
}

onLogin(loginObj:iLogin){
  this.roomSrv.LOGIN(this.loginObj).subscribe((res:any)=>{
if(res.result){
localStorage.setItem('hotelUser',JSON.stringify(res.data))
  this.route.navigateByUrl('/dashboard')
} else{
  alert('Check User Credentials')
}
  },error=>{

  } )

}



}
