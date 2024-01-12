import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from "./register/register.component";
import {FormGroup} from "@angular/forms";
import {Routes,RouterModule} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../../environments/environment";
import {reducers} from "./store/reducers";
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
import {RegisterEffect} from "./store/effects/register.effect";



@NgModule({
  declarations: [],
  exports:[],
  imports: [
    CommonModule,
    RegisterComponent,
    RouterModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    StoreModule.forFeature('auth', reducers)
  ],
  providers:[AuthService]
})
export class AuthModule { }
