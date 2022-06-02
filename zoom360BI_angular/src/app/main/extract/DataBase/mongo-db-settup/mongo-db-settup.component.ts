import { Component, OnInit } from '@angular/core';
import { SourceAccountSettup } from 'src/app/services/extract/AddNewConnectionServices/SourceAccountSettup';
import { SqlConnector } from 'src/app/services/extract/ConnectorService/SqlConnectorServices';


@Component({
  selector: 'app-mongo-db-settup',
  templateUrl: './mongo-db-settup.component.html',
  styleUrls: ['./mongo-db-settup.component.css']
})
export class MongoDbSettupComponent implements OnInit {
  imgname:string;
  constructor(public _SqlConnector:SqlConnector,public sourceAccountSettup:SourceAccountSettup) {
    this.imgname=localStorage.getItem('src');
   }

  ngOnInit(): void {
    this. getAllHostname();
  }
  getAllHostname(){
    debugger
    var UserId='admin';
    var DropdownType='Hostname'
    debugger
    this._SqlConnector.getHostName(UserId,DropdownType);
  }
}
