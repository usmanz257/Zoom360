import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { ConfigurationTemplateService } from 'src/app/services/administration/configuration-template.service';
//import { schema } from './schema.value';
@Component({
  selector: 'app-configuration-template',
  templateUrl: './configuration-template.component.html',
  styleUrls: ['./configuration-template.component.css']
})
export class ConfigurationTemplateComponent implements OnInit {
  public editorOptions: JsonEditorOptions;
  public data: any;
  public templateSave:any;
  public jsonDescription:string='';
  public message:string;
  @ViewChild(JsonEditorComponent, { static: true }) editor: JsonEditorComponent;
  constructor(private configurationTemplateService:ConfigurationTemplateService) {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.mode = 'code';
    // this.editorOptions.modes = ['code'];
    this.editorOptions.statusBar = false;
    this.editorOptions.mainMenuBar = false;
    this.editorOptions.onChange= () => this.templateSave = this.editor.get();
    //this.editorOptions.schema = schema;   
     this.data = {"products":[{"name":"car","product":[{"name":"honda","model":[{"id":"civic","name":"civic"},{"id":"accord","name":"accord"},{"id":"crv","name":"crv"},{"id":"pilot","name":"pilot"},{"id":"odyssey","name":"odyssey"}]}]}]}
   }

  ngOnInit(): void {
   this.getConfig();
  }
Save(){
  debugger
this.configurationTemplateService.saveConfigTemplate(this.templateSave,this.jsonDescription).subscribe((data:string)=>{
this.message = data;
});
}
getConfig(){
  this.configurationTemplateService.getConfigTemplate().subscribe((data:string)=>{
    this.data = data;
    });
}
}
