import { WidgetModule } from './../widget/widget.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TreetemplateComponent } from '../widget/treetemplate/treetemplate.component';
import { TreeTemplateGridComponent } from '../administration/tree-template-grid/tree-template-grid.component';
import { PredictionComponent } from './Predict.component';
import { Prediction1Component } from './prediction1/prediction1.component';
import { Prediction2Component } from './Prediction2/prediction2.component';
import { PredictionPCVComponent } from './PredictionPCV/predictionPCV.component';
import { predictionImpressionsComponent } from './PredictionImpressions/predictionImpressions.component';
import { predictionResultsComponent } from './PredictionResults/predictionResults.component';
import { QulaityComponent } from './qulaity/qulaity.component';
import { SAMComponent } from './sam/sam.component';
 

const routes: Routes = [
  
  //{ path: '', component:ApplicationStartupComponent},
   
    //Administration
    { path: '', redirectTo:'Predict', pathMatch:'full'},
    { path: 'Predict', component: PredictionComponent,
      children:[
        { path: '', redirectTo:'predictionreach', pathMatch:'full'},
        { path:'predictionreach', component:Prediction1Component},
        { path:'predictionamountspend', component:Prediction2Component},
        { path:'predictionPCV', component:PredictionPCVComponent},
        { path:'predictionImpressions', component:predictionImpressionsComponent},
        { path:'predictionResults', component:predictionResultsComponent},
        { path:'productionSAM', component:SAMComponent},
        { path:'productionQulaity', component:QulaityComponent},

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
export class PredictRoutingModule { }
