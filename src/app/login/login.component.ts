import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
public test=true
  public form: FormGroup | any;
  constructor(private fb: FormBuilder, private router: Router, private auth:AuthService) { }

  ngOnInit() {
    this.initializeForm()
  }

  initializeForm() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      rememberMe: false
    })
  }

  login() {
    try {
      let value = {
        username:this.form.value.username,
        password:this.form.value.password
      };
      let isVerfied = JSON.stringify(this.auth.dummnyUser) === JSON.stringify(value)
      if (isVerfied) {
        this.auth.setUser(this.form.value)
        this.router.navigate(['orders/order-list'])
        return
      }
       this.formDirty()
    } catch (error) {
      console.log(error)
    }
  }

  formDirty(){
   Object.keys(this.form.value).forEach((key:any) => {
    this.form.controls[key].markAsTouched()
    this.form.controls[key].markAsDirty()
   })
  }

}
