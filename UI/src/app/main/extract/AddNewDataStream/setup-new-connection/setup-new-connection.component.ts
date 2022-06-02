import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { AccessConfigServer } from 'src/app/models/extract/access-microsoft-sqlserver';
import { SQLCridentialModel } from 'src/app/models/extract/SqlDbCridentialModel';
import { NewConnectionSetupService } from 'src/app/services/extract/ConnectorService/new-connection-setup.service';
import { SqlConnector } from 'src/app/services/extract/ConnectorService/SqlConnectorServices';
import { EstablishConnector } from 'src/app/services/extract/EstablishConnectorSave';


@Component({
  selector: 'app-setup-new-connection',
  templateUrl: './setup-new-connection.component.html',
  styleUrls: ['./setup-new-connection.component.css']
})
export class SetupNewConnectionComponent implements OnInit {
  SqlModel=new  SQLCridentialModel();
  // Hostname:string="";
  // Database:string="";
  // Username:string="";
  // Password:string="";
  // ConnectivityStatus:string;
  
  


  // @Output() sqlComponent: EventEmitter<any> = new EventEmitter();

  NewConnectionForm: FormGroup;
 
  msg:string;
  
  
  ConnectionUserInfo:Observable<AccessConfigServer[]>
  

  constructor(private fb: FormBuilder,public NewConnection:NewConnectionSetupService,public _SqlConnector:SqlConnector,public establishConnectorServic:EstablishConnector) {
   this.createForm();
    this.getAllHostname();
   }

  ngOnInit(): void {
     this.getAllHostname();
   
  }
  // SendDataToparent(){
  //   debugger
  //  var obj1={
  //     "Hostname":this.Hostname,
  //      "Database":this.Database,
  //      "Username":this.Username,
  //      "Password":this.Password
  //     }
  //   this.sqlComponent.emit(obj1);

  // }
  createForm() {
    this.NewConnectionForm = this.fb.group({
      Hostname: ['', Validators.required ],
      Database: ['', Validators.required ],
      Username: ['', Validators.required ],
      Password: ['', Validators.required ]
    });
  }

  AddConnection(UserData:AccessConfigServer[] ) { 
  // debugger
  //   var listPropertyNames = Object.keys(UserData);
  //   var listPropertyvalue = Object.values(UserData);
  //   this.NewConnection.SetDataForNewSQLConnection(listPropertyNames,listPropertyvalue,UserData).subscribe((data:any)=>{
  //    debugger
  //    this.msg=data;

  //   })
  }  
  getAllHostname(){
    debugger
    var UserId='admin';
    var DropdownType='Hostname'
    debugger
    this._SqlConnector.getHostName(UserId,DropdownType);
  }
}
