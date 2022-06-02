import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SourceAccount } from 'src/app/models/extract/access-microsoft-sqlserver';
import { SourceAccountSettup } from 'src/app/services/extract/AddNewConnectionServices/SourceAccountSettup';

@Component({
  selector: 'app-fbpublic-page',
  templateUrl: './fbpublic-page.component.html',
  styleUrls: ['./fbpublic-page.component.css']
})
export class FBPublicPageComponent implements OnInit {
  SourceAccountModel=new SourceAccount();
  EmailAuthurizationtextarea=false;
  EmailAuthurizationTextAreaMsg:string="";
  EmailAuthurizationArea=true;
  SettupNewConnection=false;
  imgname:string;
  constructor(
    private router: Router,
    public sourceAccountSettup:SourceAccountSettup,
   
  ) {
    this.imgname=localStorage.getItem('src');
   }

  ngOnInit(): void {
  }
  ShowSettupNewConButton(){
    this.EmailAuthurizationArea=false;
    this.SettupNewConnection=true;
  }
  ShowEmailAuthorization(){
    this.EmailAuthurizationArea=true;
    this.SettupNewConnection=false;
  }
  SaveAuthorizData(SourceAccountSettupData:SourceAccount){
    debugger
    if(SourceAccountSettupData.Email!=undefined){
      this.sourceAccountSettup.SourceAccountSettupEmailAuthorization(SourceAccountSettupData).subscribe((data:any)=>{
        debugger
            this.EmailAuthurizationtextarea=true;
             this.EmailAuthurizationTextAreaMsg=data.trim();
      })
    }
  }
}
