import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  users: any[];

  constructor(private route: ActivatedRoute, private userService : UsersService) {
    this.route.params.subscribe(res => {
      console.log(res.id);
    })

  }

  ngOnInit() {
    this.users = this.userService.getAllUsers()
  }

}
