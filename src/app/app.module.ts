import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/Home/home.component';
import { SignUpComponent } from './Pages/SignIn/sign-up.component';
import { SignInComponent } from './Pages/SignIn/sign-in.component';
import { AlertComponent } from './Pages/Alert/alert.component';
import { AlertContComponent } from './Pages/Alert/alertCont.component';
import { AuthComponent } from './Pages/auth/auth.component';
import { MainLoaderComponent } from './Pages/Loader/main-loader.component';
import { LoaderComponent } from './Pages/Loader/loader.component';
import { DropComponent } from './Pages/DropDown/drop.component';
import { TabsComponent } from './Pages/Tabs/tabs.component';
import { MainTabsComponent } from './Pages/Tabs/main-tabs.component';
import { TabComponent } from './Pages/Tabs/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    AlertComponent,
    AlertContComponent,
    MainLoaderComponent,
    LoaderComponent,
    AuthComponent,
    DropComponent,
    TabsComponent,
    TabComponent,
    MainTabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
