import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    public router: Router
  ) { }

  // admin login
  adminLogin(adminData) {
    return this.http.post(environment.apiUrl + '/api/authentication/admin/login', adminData);
  }

}
