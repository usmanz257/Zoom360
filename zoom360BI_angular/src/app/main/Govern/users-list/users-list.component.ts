import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserListModel } from 'src/app/models/Govern/UserList.Model';
import { UserListService } from 'src/app/services/Govern/UserList/user-list.service';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
userList:UserListModel[]=[]
screenName:string='datastream';
  limit:string = 'All';
  workspaceName:string=null;
  connectionName:string=null;
  sourceName:string=null;
  accessGranted:string=null;
  createdBy:string=null;
  isActive:string=null;
  lastAccessed:string=null;
  destinationEnabled:string=null;
  allcheckbox: boolean=false;
  checkbox:boolean=false;
  sname_toggle:boolean=false;
  sname_arrow:boolean=false;
  sourceType_toggle:boolean=false;
  sourceType_arrow:boolean=false;
  workSpace_toggle:boolean=false;
  workSpace_arrow:boolean=false;
  destination_toggle:boolean=false;
  destination_arrow:boolean=false;
  snext_toggle:boolean=false;
  snext_arrow:boolean=false;
  supdate_toggle:boolean=false;
  supdate_arrow:boolean=false;
  accountId:string;
  _tablecounter:number=0;
  toggleStatus:boolean[]=[];
  _userUpdatedList:any[]=[];
  _recordLength:number;
  constructor(public userListService:UserListService,private storageService:StorageService, private router:Router) { }

  ngOnInit() {
   // localStorage.removeItem(environment.storage.userId);
    this.getUserList();
  }
getUserList(){
  debugger
        this.userListService.getUserList().subscribe((data:UserListModel[])=>{
          debugger
        this.userList=data;
        // for(let i=0;i<data.length;i++){
        //   if(data[i].userActive=='1'){
        //     this.toggleStatus.push(true);
        //   }
        //  else{
        //   this.toggleStatus.push(false);
        //  }
        // }
        });
}
checkAll(ev) {
  this.userList.forEach(x => x.state = ev.target.checked);
}
findCount(index,e) {
  debugger
  var elemCheckBox= document.getElementById('check'+(index+1)) as HTMLInputElement;
  if(e.target.checked)
  {
    this.allcheckbox=false;
    this._tablecounter+=1;
    var SubUserID = 'subUserID';
    var  test= this.userList[index][SubUserID];
    var result= this._userUpdatedList.findIndex(x=>x.subUserID==test);
    if(result==-1){
        this._userUpdatedList.push(this.userList[index]);
        }
    else{
        this._userUpdatedList.splice(result,1);
        this._userUpdatedList.push(this._userUpdatedList[index]);
        }
  }
  else{
    this._tablecounter-=1;
    var SubUserID = 'subUserID';
    var  test= this.userList[index][SubUserID];
    var result= this._userUpdatedList.findIndex(x=>x.subUserID==test);
    if(result!=-1){
      this._userUpdatedList.splice(result,1);
        }
    this.allcheckbox=false;
    
  }
 }
functionCount(e){
  debugger
  
  if(e.target.checked)
  {
    this._userUpdatedList=[];
    this.allcheckbox=true;
    this._tablecounter= this._recordLength;
    for(let i=0;i<this.userList.length;i++){
      
      var SubUserID = 'subUserID';
      var  test= this.userList[i][SubUserID];
      var result= this._userUpdatedList.findIndex(x=>x.SubUserID==test);
      if(result==-1){
          this._userUpdatedList.push(this.userList[i]);
          }
      else{
          this._userUpdatedList.splice(result,1);
          this._userUpdatedList.push(this.userList[i]);
          }
  }      
  }
  else{
       this.allcheckbox=false;
       this._tablecounter=0;
       this._userUpdatedList.splice(0,this._userUpdatedList.length);
  }
 }
 
  applySort(fieldName){
//    if(fieldName=='appearanceLogo'){
//     this.sourceType_arrow=true;
//     this.sourceType_toggle=this.sourceType_toggle;
//     this._gridDataService._sortToggle=!this._gridDataService._sortToggle;
//     this._gridDataService.sortDataStream(fieldName);
//    }
//    else if(fieldName=='workspaceName'){
     
//     this.workSpace_arrow=true;
//     this.workSpace_toggle=!this.workSpace_toggle;
//     this._gridDataService._sortToggle=!this._gridDataService._sortToggle;
//     this._gridDataService.sortDataStream(fieldName);
//    }
//    else if(fieldName=='sourceName'){
//     this.sname_arrow=true;
//     this.sname_toggle=!this.sname_toggle;
//     this._gridDataService._sortToggle=!this._gridDataService._sortToggle;
//     this._gridDataService.sortDataStream(fieldName);
//    }
//   else if(fieldName=='destinationEnabled'){
//     this.destination_arrow=true;
//     this.destination_toggle=!this.destination_toggle;
//     this._gridDataService._sortToggle=!this._gridDataService._sortToggle;
//     this._gridDataService.sortDataStream(fieldName);
//   }
//   else if(fieldName=='nextRun'){
//     this.snext_arrow=true;
//     this.snext_toggle=!this.snext_toggle;
//     this._gridDataService._sortToggle=!this._gridDataService._sortToggle;
//     this._gridDataService.sortDataStream(fieldName);
//   }
//   else if(fieldName=='serverInsertDate'){
//     this.supdate_arrow=true;
//     this.supdate_toggle=!this.supdate_toggle;
//     this._gridDataService._sortToggle=!this._gridDataService._sortToggle;
//     this._gridDataService.sortDataStream(fieldName);
//   }
  
 }
UserEdit(userId){
  debugger
console.log(userId)
 //JSON.stringify(localStorage.setItem("userId",userId));
 this.storageService.setItem(environment.storage.governUserId,userId);
 this.router.navigate(['/govern/users/userprofile']);
}
reloadPage(){
  this.sourceType_arrow=false;
  this.sname_arrow=false;
  this.workSpace_arrow=false;
  this.destination_arrow=false;
  this.snext_arrow=false;
  this.supdate_arrow=false;
//   this._gridDataService.getDatastreamswithLimit(this.workspaceName,this.connectionName,this.sourceName,this.accessGranted
//     ,this.createdBy,this.isActive,this.lastAccessed,this.destinationEnabled,5);
// // window.location.reload();
}
newUser(){
  this.storageService.removeItem(environment.storage.governUserId);
  //JSON.stringify(localStorage.removeItem("userId"));
  this.router.navigate(['/govern/users/userprofile']);
}
}
