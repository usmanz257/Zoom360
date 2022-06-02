import { Component, OnInit } from '@angular/core';
import { AppMenuService } from 'src/app/Services/common/app-menu.service';
import { googleoauth } from 'src/app/services/Enrich/googleOauthToken';
import { GetAllExtractsService } from 'src/app/Services/extract/get-all-extracts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allcheckbox: boolean=false;
  checkbox:boolean=false;
  screenName:string='allextracts';
  limit:string = 'All';
  workspaceName:string='all';
  connectionName:string='all';
  sourceName:string='all';
  accessGranted:string='all';
  createdBy:string='all';
  isActive:string='all';
  lastAccessed:string='all';
  destinationEnabled:string='all';
  filterToggle:boolean=false;
  showfilterText:string='Show Filter';
 
  constructor(private appMenuService:AppMenuService,private AllExtractService:GetAllExtractsService,
    private Googleoauth:googleoauth) { }

  ngOnInit(): void {
  this.AllExtractService.accountId='all';
  this.getAllExtract();
  debugger
  let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('code')) {
        var code = searchParams.get('code');
         
        this.Googleoauth.GetToken(code);
    }
  }
  getAllExtract(){
    this.AllExtractService.getAllextract(this.workspaceName,this.connectionName,this.sourceName,this.accessGranted
      ,this.createdBy,this.isActive,this.lastAccessed,this.destinationEnabled,5);
  }
  showFilters(){
    this.filterToggle=!this.filterToggle;
    if(this.filterToggle==false){
      this.showfilterText='Show Filter';
    }
    else{
      this.showfilterText='Hide Filter';
    }
    
  }
}
