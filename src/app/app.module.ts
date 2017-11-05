import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/Home/home.component';
import { AlertComponent } from './Pages/Alert/alert.component';
import { AlertModalComponent } from './Pages/Modal/alert.component';
import { AlertContComponent } from './Pages/Alert/alertCont.component';
import { MainLoaderComponent } from './Pages/Loader/main-loader.component';
import { LoaderComponent } from './Pages/Loader/loader.component';
import { DropComponent } from './Pages/DropDown/drop.component';
import { TabsComponent } from './Pages/Tabs/tabs.component';
import { MainTabsComponent } from './Pages/Tabs/main-tabs.component';
import { TabComponent } from './Pages/Tabs/tab.component';
import { HighlightDirective } from './Pages/Directive/highlight.directive';
import { MainDirComponent } from './Pages/Directive/main-dir.component';
import { HightDirective } from './Pages/Alert/hight.directive';
import { ToolTipDirective } from './Pages/tooltip.directive';
import { RevertifDirective } from './Pages/nIf/nif.directive';
import { RevertIfComponent } from './Pages/nIf/nif.component';
import { SizePipi } from './Pages/Pipe/pipe-size.pipe';
import { FileSizeComponent } from './Pages/Pipe/file-size.component';
import { TooltipDirective } from './Pages/Alert/tooltip.directive';
import { MainModalComponent } from './Pages/Modal/main-modal.component';
import { ProgressBarComponent } from './Pages/progress-bar/progress-bar.component';
import { MainProgressBarComponent } from './Pages/progress-bar/main-progress-bar.component';
import { CustomIfDirective } from './Pages/customIf/customIf.directive';
import { RangeDirective } from './Pages/range/range.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent,
    AlertContComponent,
    AlertModalComponent,
    MainLoaderComponent,
    LoaderComponent,
    DropComponent,
    TabsComponent,
    TabComponent,
    MainTabsComponent,
    HighlightDirective,
    MainDirComponent,
    HightDirective,
    ToolTipDirective,
    RevertIfComponent,
    RevertifDirective,
    SizePipi,
    FileSizeComponent,
    TooltipDirective,
    MainModalComponent,
    ProgressBarComponent,
    MainProgressBarComponent,
    CustomIfDirective,
    RangeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AlertModalComponent]
})
export class AppModule { }
