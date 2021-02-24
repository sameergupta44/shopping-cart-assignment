import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as LoginActions from '../../reducers/login/login.action';
import * as HomeActions from '../../reducers/home/home.action';
import * as fromRoot from '../../reducers/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  bannerData: any[] = [];
  loginForm: FormGroup;
  loginStatus$: Observable<any>;

  private initForm(): FormGroup {
    const formVals = {
      username: new FormControl('', Validators.compose( [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ] ) ),
      password: new FormControl('',  Validators.compose( [
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[\\d])[A-Za-z\\d]{6,}$')
      ] ) ),
    };

    return this.fb.group(formVals);
  }

  constructor(private fb: FormBuilder,
              private store: Store<fromRoot.State>) {
      this.loginForm = this.initForm();
      this.loginStatus$ = this.store.select(fromRoot.isUserLoggedInSelector);
     }

  ngOnInit(): void {

  }

  onSubmit(): void {
   const { username, password } = this.loginForm.value;
   this.store.dispatch(LoginActions.LoginAttempt({ payload: { username, password } } ));
  }

  get username(): any{
    return this.loginForm.get('username');
  }

  get password(): any{
    return this.loginForm.get('password');
  }

}
