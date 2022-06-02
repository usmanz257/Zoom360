import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ServiceInjector } from '../libraries/serviceInjector';
import { UserService } from '../services/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyHelper } from '../utils/myHelper';
import { TokenInterceptor } from '../interceptors/token-interceptor';
import {PopoverModule} from "ngx-popover";
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { ArraySortPipe } from './pipes/array-pipes';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { TabModule, TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import { CheckBoxModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { EJAngular2Module } from 'ej-angular2';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
@NgModule({
  entryComponents: [
  ],
  declarations: [
    ArraySortPipe,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    AngularFontAwesomeModule,
    ModalModule.forRoot(),
    HttpClientModule,
    PopoverModule,
    AutocompleteLibModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SidebarModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    NgJsonEditorModule,
    RouterModule,
    ToastModule,
    CheckBoxModule ,
    RadioButtonModule,
    EJAngular2Module.forRoot(),
    DropDownListModule,
    TreeViewModule,
    TabModule,
    RadioButtonModule,
    UploaderModule,
  ],
  exports: [
    TabsModule,
    BsDropdownModule,
    ModalModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PopoverModule,
    AutocompleteLibModule,
    NgbModule,
    SidebarModule,
    BsDatepickerModule,
    TimepickerModule,
    ArraySortPipe,
    RouterModule,
    NavbarComponent,
    NgJsonEditorModule,
    ToastModule,
    CheckBoxModule ,
    RadioButtonModule,
    DropDownListModule, 
    TreeViewModule,
    TabModule,
    RadioButtonModule,
    UploaderModule
  ],
  providers: [
    UserService,
    MyHelper,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    ArraySortPipe
  ]
})
export class SharedModule {
  constructor(private injector: Injector) {
    ServiceInjector.injector = this.injector;
  }
}
