import { WidgetModule } from './../widget/widget.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TreetemplateComponent } from '../widget/treetemplate/treetemplate.component';
import { CustomTreeTemplateComponent } from './TreeTemplate.component';
import { TreeTemplateGridComponent } from '../administration/tree-template-grid/tree-template-grid.component';
 

const routes: Routes = [
  
  //{ path: '', component:ApplicationStartupComponent},
   
    //Administration
    { path: '', redirectTo:'TreeTemplate', pathMatch:'full'},
    { path: 'TreeTemplate', component: CustomTreeTemplateComponent,
      children:[
        { path: '', redirectTo:'templateslist', pathMatch:'full'},
        { path:'treeview',component:TreetemplateComponent},
        { path:'templateslist', component:TreeTemplateGridComponent},


        // { path:'TreeTemplateGrid',component:TreeTemplateGridComponent,canActivate:[UserRightsGuardService]},
        
       // { path: '', redirectTo:'workspacesetup', pathMatch:'full'}
      ] ,
      },
      // {path:'status', component:StatusErrorComponent},
      // {path: '**', redirectTo:'status',pathMatch:'prefix'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeTemplateRoutingModule { }
