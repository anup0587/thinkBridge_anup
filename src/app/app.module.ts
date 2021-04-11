import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from "./helper/angular-material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/http-error.interceptor'
 import {LayoutModule} from './layout/layout.module';

import { LoaderComponent } from './global/loader/loader.component'
import { SnackBarService } from './service/snack-bar.service'


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS ,useClass :HttpErrorInterceptor,multi:true
    },
    SnackBarService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
