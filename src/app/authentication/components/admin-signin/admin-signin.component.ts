import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginData, User } from '../../models/user';
import { AuthenticationService } from '../../services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.scss']
})
export class AdminSigninComponent implements OnInit {

  adminLogin: FormGroup;

  constructor(
    public authService: AuthenticationService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.adminLoginFormBuild();
  }

  adminLoginFormBuild() {
    this.adminLogin = new FormGroup({
      login_user_name: new FormControl('', Validators.required),
      login_password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const adminData = {
      login_user_name: this.adminLogin.get('login_user_name').value,
      login_password: this.adminLogin.get('login_password').value
    }
    this.authService.adminLogin(adminData).subscribe(
      (response: LoginData) => {
        console.log(response);
        if (response.user.user_status === true) {
          localStorage.setItem('token', response.access_token);
          localStorage.setItem('user_id', response.user.id);
          this.showSuccess('Login Success!');
          this.router.navigate(['/dashboard']);
        } else {
          this.showError('Login Fail!');
        }
      },
      (error) => {
      }
    );

  }
  showSuccess(srt) {
    this.toastr.success(srt);
  }
  showError(srt) {
    this.toastr.error(srt);
  }

}
