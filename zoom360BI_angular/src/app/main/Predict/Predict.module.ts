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
import { PredictRoutingModule } from './Predict-routing.module';
import { PredictionComponent } from './Predict.component';
import { Prediction1Component } from './prediction1/prediction1.component';
import { Prediction2Component } from './Prediction2/prediction2.component';
import { PredictionPCVComponent } from './PredictionPCV/predictionPCV.component';
import { predictionImpressionsComponent } from './PredictionImpressions/predictionImpressions.component';
import { predictionResultsComponent } from './PredictionResults/predictionResults.component';
import { SAMComponent } from './sam/sam.component';
import { QulaityComponent } from './qulaity/qulaity.component';

 



@NgModule({
  declarations: [
    PredictionComponent,
    Prediction1Component,
    Prediction2Component,
    PredictionPCVComponent,
    predictionImpressionsComponent,
    predictionResultsComponent,
    SAMComponent,
    QulaityComponent
   
  ],
  imports: [
    SharedModule,
    CommonModule,
    PredictRoutingModule,
    
    FormsModule,
    ReactiveFormsModule,
    WidgetModule,
    EJAngular2Module.forRoot(), 
  ],
  exports:[
    
  ]
})
export class PredictModule { }
