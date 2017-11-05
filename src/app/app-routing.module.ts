import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/Home/home.component';
import { AlertComponent } from './Pages/Alert/alert.component';
import { MainLoaderComponent } from './Pages/Loader/main-loader.component';
import { DropComponent } from './Pages/DropDown/drop.component';
import { MainTabsComponent } from './Pages/Tabs/main-tabs.component';
import { MainDirComponent } from './Pages/Directive/main-dir.component';
import { RevertIfComponent } from './Pages/nIf/nif.component';
import { FileSizeComponent } from './Pages/Pipe/file-size.component';
import { MainModalComponent } from './Pages/Modal/main-modal.component';
import { MainProgressBarComponent } from './Pages/progress-bar/main-progress-bar.component';
import { DropzoneComponent } from './Pages/DropZone/main-dropzone.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'alert', component: AlertComponent },
  { path: 'modal', component: MainModalComponent },
  { path: 'loader', component: MainLoaderComponent },
  { path: 'drop', component: DropComponent },
  { path: 'tabs', component: MainTabsComponent },
  { path: 'nif', component: RevertIfComponent },
  { path: 'file-size', component: FileSizeComponent },
  { path: 'progress-bar', component: MainProgressBarComponent },
  { path: 'directive', component: MainDirComponent },
  { path: 'drop-zone', component: DropzoneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
