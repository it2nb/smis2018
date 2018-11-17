import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { appConfig } from '../app-cfg';
import { Router } from '@angular/router';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  member: any;
  member_name = '';
  member_password = '';
  appconfig = appConfig;
  errortxt = '';
  heroForm: any;
  // router: Router;
  
  constructor(private memberService: MemberService, private router: Router) { }
  
  async ngOnInit() {
    sessionStorage.clear();
  }

  async onSubmit(loginForm) {
    if(loginForm.valid){
      this.member = await this.memberService.getMembers('memberLogin', loginForm.value.username, loginForm.value.password);
      if(this.member != false){
        $('#alerterror').hide();
        sessionStorage.setItem("loginMember",JSON.stringify(this.member));
        this.router.navigate(['/system']);
      } else {
        this.errortxt = 'Username หรือ Password ไม่ถูกต้อง';
        $('#alerterror').show();
      }
    }
  }
}
