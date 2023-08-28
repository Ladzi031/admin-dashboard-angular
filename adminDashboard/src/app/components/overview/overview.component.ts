import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';



type user = {
  id: number,
  first_name: string,
  last_name: string,
  status: "online" | "offline",

}


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  public users !: user[]; 

  constructor(private userService: UsersService){}
ngOnInit(): void {
  this.users = this.userService.getUser();
}
}
