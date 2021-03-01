import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as LoginActions from '../../reducers/login/login.action';
import * as HomeActions from '../../reducers/home/home.action';
import * as fromRoot from '../../reducers/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  bannerData: any[] = [];
  registerForm: FormGroup;

  private passwordMatchValidator(frm: FormGroup): any {
    // tslint:disable-next-line: no-string-literal
    return frm.controls['password'].value === frm.controls['confirmPassword'].value ? null : {mismatch: true};
  }

  private initForm(): FormGroup {
    const formVals = {
      firstName: new FormControl('', Validators.compose( [ Validators.required ] ) ),
      lastName: new FormControl('', Validators.compose( [ Validators.required ] ) ),
      username: new FormControl('', Validators.compose( [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ] ) ),
      password: new FormControl('',  Validators.compose( [
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[\\d])[A-Za-z\\d]{6,}$')
      ] ) ),
      confirmPassword: new FormControl('',  Validators.compose( [ Validators.required ] ) ),
    };

    return this.fb.group(formVals, { validator: this.passwordMatchValidator });
  }

  constructor(private fb: FormBuilder,
              private store: Store<fromRoot.State>) {
      this.registerForm = this.initForm();
     }

  ngOnInit(): void {

  }

  onSubmit(): void {
   const userData = this.registerForm.value;
   this.store.dispatch(LoginActions.RegisterAttempt({ payload: { data: userData } } ));
  }

  get firstName(): any{
    return this.registerForm.get('firstName');
  }

  get lastName(): any{
    return this.registerForm.get('lastName');
  }

  get username(): any{
    return this.registerForm.get('username');
  }

  get password(): any{
    return this.registerForm.get('password');
  }

  get confirmPassword(): any{
    return this.registerForm.get('confirmPassword');
  }

}
