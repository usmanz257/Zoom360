import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

import { HttpEventType, HttpClient } from '@angular/common/http';
import { FileUploadService } from 'src/app/services/extract/FilesValidations';
import { SourceAccountSettup } from 'src/app/services/extract/AddNewConnectionServices/SourceAccountSettup';
import { FileUpload } from 'src/app/services/extract/AddNewConnectionServices/fileupload';
import { googleoauth } from 'src/app/services/Enrich/googleOauthToken';
@Component({
  selector: 'app-files-uploade',
  templateUrl: './files-uploade.component.html',
  styleUrls: ['./files-uploade.component.css']
})
export class FilesUploadeComponent implements OnInit {
  @Output() public onUploadFinished = new EventEmitter();
  file:string;
  FileErrorMessage=false;
  FileEmptyMessageError=false;
  FileEmptyMsg:string;
  imgname:string;
  public progress: number;
  public message: string;
  FileType:string;
  constructor(public fileUploadService:FileUploadService,
    public sourceAccountSettupservis:SourceAccountSettup,
    public fileUpload:FileUpload,
    private Googleoauth:googleoauth
    ) { 
     var fileextention=localStorage.getItem("FileType");
      this.FileType=fileextention;
      this.imgname=localStorage.getItem('src');
    }

  ngOnInit(): void {

    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('code')) {
        var code = searchParams.get('code');
         
        this.Googleoauth.uploadfile(code);
    }
  }
   
  filesName(fileInput:any,files)
  {
    if (files.length === 0) {
      return;
    }
    debugger
    this.file = fileInput.target.files[0].name.split('.').pop();
     
     if(this.FileType =="."+this.file){
      this.FileEmptyMessageError=false;
       let fileToUpload = <File>files[0];
       const formData = new FormData();
       formData.append('file', fileToUpload, fileToUpload.name);
       }
       else{
        this.FileEmptyMsg="Please choose selected file type";
        this.FileEmptyMessageError=true;
      }
  }
  uploadFile(selectedFile){
    debugger
    if(selectedFile.length>0)
    {
      this.FileEmptyMessageError=false;
      let fileToUpload = <File>selectedFile[0];
      const formData = new FormData();
      formData.append('file', fileToUpload, fileToUpload.name);
      let UserId = "1";
       let WORKSPACEID = "1";
       let CLIENTID = "401";
       let AccountId = "9012";
       let ConnectorId =JSON.parse(localStorage.getItem('Connectorid'));
      this.fileUpload.uploadfile(formData,UserId,WORKSPACEID,CLIENTID,ConnectorId,AccountId).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      });
    }
    else{
      this.FileEmptyMsg="Please choose the file";
      this.FileEmptyMessageError=true;
    }
    
  }
}
