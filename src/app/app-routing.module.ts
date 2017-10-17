import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/Home/home.component';
import { SignInComponent } from './Pages/SignIn/sign-in.component';
import { SignUpComponent } from './Pages/SignIn/sign-up.component';
import { AlertComponent } from './Pages/Alert/alert.component';
import { MainLoaderComponent } from './Pages/Loader/main-loader.component';
import { DropComponent } from './Pages/DropDown/drop.component';
import { MainTabsComponent } from './Pages/Tabs/main-tabs.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'alert', component: AlertComponent },
  { path: 'loader', component: MainLoaderComponent },
  { path: 'drop', component: DropComponent },
  { path: 'tabs', component: MainTabsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
