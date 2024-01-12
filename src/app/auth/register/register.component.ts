import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {Routes} from '@angular/router';
import {Store, select} from "@ngrx/store";
import {registerAction} from "../store/actions/actions";
import {Observable} from "rxjs";
import {isSubmittingSelector} from "../store/selectors";
import {AsyncPipe} from "@angular/common";
import {AuthService} from "../services/auth.service";
import {CurrentUserInterface} from "../../shared/types/currentUser.interface";
import {RegisterRequestInterface} from "../types/registerRequest.interface";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  isSubmitting$: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store, private authService: AuthService) {
    console.log('initializeForm1');
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    console.log('isSubmitting$ = ', this.isSubmitting$);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('onSubmitRegister');
    const request: RegisterRequestInterface = {
      user: this.registerForm.value
    };
    console.log('submit request: ', request, ' form valid: ', this.registerForm.valid);
    this.store.dispatch(registerAction({request}));
    //$event.preventDefault();$event.stopPropagation()
    /*//old no effectModule
    this.authService.register(this.registerForm.value).subscribe((currentUser: CurrentUserInterface) => {
      console.log('currentUser = ', currentUser)
    });*/
    //debugger;
  }
}
