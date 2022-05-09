import { AuthenticationService } from './../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  targetUrl:string='';

  constructor(
    private formBuilder: FormBuilder, private route:ActivatedRoute,
    private router:Router, private authServ:AuthenticationService) {
        if(authServ.getToken()){
          router.navigate(['/']);
        }
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });

    this.targetUrl = this.route.snapshot.queryParams['targetUrl'] || '/';
  }

  ngOnInit(): void {}

  get form() { return this.loginForm.controls; }

  doLogin() {
    let username:string = this.form.username.value;
    let password:string = this.form.password.value;

    this.authServ.login(username, password).subscribe(
      data=>{
        this.router.navigate([this.targetUrl]);
      });
  }
}
