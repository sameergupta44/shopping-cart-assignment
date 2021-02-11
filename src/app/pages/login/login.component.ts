import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DataService } from 'src/app/services/data.service';
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
  bannerData$: Observable<any>;


  private initForm(): FormGroup {
    const formVals = {
      username: new FormControl('', Validators.compose( [ Validators.required ] ) ),
      password: new FormControl('',  Validators.compose( [ Validators.required ] ) ),
    };

    return this.fb.group(formVals);
  }

  constructor(private dataService: DataService,
              private fb: FormBuilder,
              private store: Store<fromRoot.State>) {
      this.loginForm = this.initForm();
      this.loginStatus$ = this.store.select(fromRoot.isUserLoggedInSelector);
      this.bannerData$ = this.store.select(fromRoot.getBannerDataSelector);
     }

  ngOnInit(): void {
    this.store.dispatch(HomeActions.LoadBannerResults());
  }

  onSubmit(): void {
   const { username, password } = this.loginForm.value;
   this.store.dispatch(LoginActions.LoginAttemptSuccess());
  }

}
