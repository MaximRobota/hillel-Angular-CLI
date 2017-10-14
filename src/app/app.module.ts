import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/Home/home.component';
import { SignUpComponent } from './Pages/SignIn/sign-up.component';
import { SignInComponent } from './Pages/SignIn/sign-in.component';
import { AlertComponent } from './Pages/Alert/alert.component';
import { AlertContComponent } from './Pages/Alert/alertCont.component';
import { HightDirective } from './Pages/Alert/hight.directive';
import { ToolTipDirective } from './Pages/tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    AlertComponent,
    AlertContComponent,
    HightDirective,
    ToolTipDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
