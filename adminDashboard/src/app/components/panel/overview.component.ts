import { Component, OnInit} from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { users } from 'src/app/model/users'



@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit{ 
  public users !: users[];
  public totalNumUsers = 0;
  constructor(private userService: UsersService){}
  
  ngOnInit(): void {
     this.userService.getUsers().subscribe((data) => { 
      this.users = data as users[];
      this.totalNumUsers = this.users.length;
      });
    }
    
}
