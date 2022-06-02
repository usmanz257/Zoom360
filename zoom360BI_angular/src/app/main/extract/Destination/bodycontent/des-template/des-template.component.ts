import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 import { googleoauth } from 'src/app/services/Enrich/googleOauthToken';
import { AddNewConnectoinWizardStyle } from 'src/app/services/extract/AddNewConnectionWizardStyle';
import { Destination } from 'src/app/services/extract/destination/wizard-services';

@Component({
  selector: 'app-des-template',
  templateUrl: './des-template.component.html',
  styleUrls: ['./des-template.component.css']
})
export class DesTemplateComponent implements OnInit {

  imgname:string;
  constructor(public destinationwizard:Destination, private router: Router,  private fbtoken:googleoauth) {
    this.imgname=localStorage.getItem('src');
   }

  ngOnInit(): void {
    debugger
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('code')) {
        var code = searchParams.get('code');
        var stringlen="https://graph.facebook.com/v9.0/oauth/access_token?client_id=1920128158125223&redirect_uri=http://localhost:4200/extract/destination/Template&client_secret=28137fd14ec3202e7f48bef84788c982&code="+code ;
        
        this.fbtoken.fbUrl(stringlen);
    }
  }
  ReverseClass(){
    this.destinationwizard.TempleteWizardClass="AddNewConnectionTemplatewizard";
    this.destinationwizard.SourceAccountDisable=true;
     this.router.navigate(['extract/destination/description']);
   }
  NextSourceObject(){
    this.destinationwizard.SourceAccountClass="AddNewConnectionSourcewizardtick"
    this.destinationwizard.ConfiguureWizard=false;
    this.router.navigate(['extract/destination/configration']);

  }

}
