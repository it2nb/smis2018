import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {
  loginMember: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.loginMember = JSON.parse(sessionStorage.getItem('loginMember')) || {member_status: ''};
    if(this.loginMember.member_status == '')
      this.router.navigate(['/login']);
  }

}
