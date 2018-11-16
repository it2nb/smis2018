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
  // router: Router;
  
  constructor(private memberService: MemberService, private router: Router) { }

  async ngOnInit() {
    sessionStorage.clear();
    $('.ui.form')
    .form({
      fields: {
        username: {
          identifier: 'username',
          rules: [
            {
              type   : 'empty'
            }
          ]
        },
        password: {
          identifier: 'password',
          rules: [
            {
              type   : 'empty'
            }
          ]
        }
      }
    }).submit(function(event){
      event.preventDefault();
    });

    $('#alerterror').hide();
  }
  async memberLogin(){
    if(this.member_name != '' && this.member_password != ''){
      this.member = await this.memberService.getMembers('memberLogin', this.member_name, this.member_password);
      if(this.member != false){
        $('#alerterror').hide();
        sessionStorage.setItem("loginMember",JSON.stringify(this.member));
        this.router.navigate(['/system']);
      } else {
        this.errortxt = 'ชื่อผู้ใช้ หรือ รหัสผ่าน ไม่ถูกต้อง';
        $('#alerterror').show();
      }

    } else {
      this.errortxt = 'กรุณากรอก ชื่อผู้ใช้ และ รหัสผ่าน';
      $('#alerterror').show();
    }
  }

}
