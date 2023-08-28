import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { users } from 'src/app/interfaces/users'


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  public users !: users[];

  constructor(private userService: UsersService){}
  
  ngOnInit(): void {
  this.users = this.userService.getUser();
}
}
