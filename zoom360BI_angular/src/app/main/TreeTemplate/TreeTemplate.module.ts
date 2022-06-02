import { WidgetModule } from './../widget/widget.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { RouterModule } from '@angular/router';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule, DropDownListComponent, DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { EJAngular2Module } from 'ej-angular2';
import { SharedModule } from 'src/app/shared/shared.module';
import { TreeTemplateGridComponent } from '../administration/tree-template-grid/tree-template-grid.component';
import { TreeTemplateRoutingModule } from './TreeTemplate-routing.module';
import { CustomTreeTemplateComponent } from './TreeTemplate.component';
import { TreetemplateComponent } from '../widget/treetemplate/treetemplate.component';
 



@NgModule({
  declarations: [
    TreeTemplateGridComponent,
    CustomTreeTemplateComponent,
    TreetemplateComponent
   
  ],
  imports: [
    SharedModule,
    CommonModule,
    TreeTemplateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetModule,
    EJAngular2Module.forRoot(), 
  ],
  exports:[
    
  ]
})
export class TreeTemplateModule { }
