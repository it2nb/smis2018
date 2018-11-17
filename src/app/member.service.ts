import {Injectable} from '@angular/core';
import http from 'axios';
import {appConfig} from './app-cfg';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  appconfig = appConfig;
  constructor(private http: HttpClient) {

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