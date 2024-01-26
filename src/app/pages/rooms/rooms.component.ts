import { Component ,NgModule,OnInit} from '@angular/core';
import { RoomService } from '../../service/room.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit{

roomList:any[]=[];
roomObj:any= {
  "roomId": 0,
  "roomName": "",
  "isAcAvailable": false,
  "roomCapacity": 0,
  "isActive": false,
  "roomTariff": 0,
  "extensionNo": ""
};

constructor(private roomSrv:RoomService){

}

  ngOnInit(): void {
    this.getAllRooms();
  }

  getAllRooms(){
    this.roomSrv.getAllRoom().subscribe((res:any)=>{
      this.roomList = res.data ;
    })
  }

  addNewRoom(){
    const obj={
      "roomId": 0,
      "roomName": "",
      "isAcAvailable": false,
      "roomCapacity": 0,
      "isActive": false,
      "roomTariff": 0,
      "extensionNo": ""
    };
    this.roomList.unshift(obj)
  }

}
