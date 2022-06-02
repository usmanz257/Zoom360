import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataExportTemplete } from 'src/app/Models/mainmenu.model';
import { ExportTemplateSetupService } from 'src/app/Services/administration/export-template-setup.service';
import { AppComponentBase } from 'src/app/services/AppComponentBase';

@Component({
  selector: 'app-export-template',
  templateUrl: './export-template.component.html',
  styleUrls: ['./export-template.component.css']
})
export class ExportTemplateComponent extends AppComponentBase implements OnInit {
  CurrencySetup: FormGroup;
  dataExportTemplate= new DataExportTemplete();
  userId:string='admin';
  workSpaceId:number=11;
  client_id:string=''+1003;
  Status_message:string;
  exportXLS:string='';
  exportPPT:string='';
  exportPDF:string='';
  constructor(
    injector:Injector,
    private fb: FormBuilder,public exportTemplateService:ExportTemplateSetupService){ super(injector);}

  ngOnInit(): void {
  }

  // createForm() {
  //   this.CurrencySetup = this.fb.group({
  //     exportXLS: ['XLS', Validators.required ],
  //     exportPPT: ['PPT', Validators.required],
  //     exportPDF: ['PDF', Validators.required ],
  //   });
  // }
  onXLSChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      console.log(event.target.files[0].name);
      this.exportXLS=event.target.files[0].name;
      reader.readAsDataURL(file);
      // reader.onload = () => {
      //   // this.formGroup.patchValue({
      //   //   file: reader.result
      //   // });
        
      //   // need to run CD since file load runs outside of zone
      //   //this.cd.markForCheck();
      // };
    }
  }
  onPPTChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      console.log(event.target.files[0].name);
      this.exportPPT=event.target.files[0].name;
      reader.readAsDataURL(file);
      // reader.onload = () => {
      //   // this.formGroup.patchValue({
      //   //   file: reader.result
      //   // });
        
      //   // need to run CD since file load runs outside of zone
      //   //this.cd.markForCheck();
      // };
    }
  }
  onPDFChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      console.log(event.target.files[0].name);
      this.exportPDF=event.target.files[0].name;
      reader.readAsDataURL(file);
      // reader.onload = () => {
      //   // this.formGroup.patchValue({
      //   //   file: reader.result
      //   // });
        
      //   // need to run CD since file load runs outside of zone
      //   //this.cd.markForCheck();
      // };
    }
  }
  SaveConfig(data:DataExportTemplete){
    debugger
    data.userId = this.clientDetailService.getuserID();
    data.workSpaceId=this.clientDetailService.getWorkspaceID();
    data.CLIENT_ID = this.clientDetailService.getClientID();
    data.ClientTime = this.clientDateTimeService.getCilentTime();
    data.ClientDate = this.clientDateTimeService.getCilentDate();
    data.ClientTimeZone = this.clientDateTimeService.getClientTimeZone();
    this.dataExportTemplate.userId = this.userId;
    this.dataExportTemplate.workSpaceId = this.workSpaceId;
    this.dataExportTemplate.CLIENT_ID = this.client_id;
    this.dataExportTemplate.exportXLS = this.exportXLS;
    this.dataExportTemplate.exportPPT = this.exportPPT;
    this.dataExportTemplate.exportPDF = this.exportPDF;
  
    this.exportTemplateService.saveTempleteSetup(data).subscribe((data:string) => {
      debugger
       this.Status_message = data;
      alert(data);
      console.log(this.Status_message);
      });

  }
}
