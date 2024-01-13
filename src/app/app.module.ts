import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './auth/store/effects/register.effect';

/*
  AppComponent - и так standalone, модуль не нужен
  либо модуль но AppComponent не standalone

  по сути файл не нужен пишем все в standalone AppComponent, можно удалить
*/
@NgModule({
  declarations: [
    // AppComponent,
    // RegisterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
    RouterModule,
    HttpClientModule,
    AuthModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forFeature([RegisterEffect]),
    // AppComponent, // типа модуль
  ],

  providers: [],
  // bootstrap: [AppComponent],
})
export class AppModule {}
