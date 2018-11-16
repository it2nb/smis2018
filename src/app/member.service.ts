import {Injectable} from '@angular/core';
import http from 'axios';
import {appConfig} from './app-cfg';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  appconfig = appConfig;
  constructor() {

  }

  async getMembers(fn, member_name, member_password) {
    let result = await http.post(this.appconfig.ApiURL + 'member.php', {
      ApiKey: this.appconfig.ApiKey,
      fn: fn,
      member_name: member_name,
      member_password: member_password
    });
    return result.data;
  }
}