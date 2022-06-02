import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { ApplicationStartupComponent } from './main/application-startup/application-startup.component';
import { AuthGuard } from './guards/auth.guard';
import { DatePipe } from '@angular/common';
import { WidgetModule } from './main/widget/widget.module';
import { NewComponentComponent } from './moduleName/new-component/new-component.component';





@NgModule({
  declarations: [
    AppComponent,
    ApplicationStartupComponent,
    NewComponentComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    WidgetModule
  ],
  exports: [TabsModule],
  providers: [AuthGuard,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
