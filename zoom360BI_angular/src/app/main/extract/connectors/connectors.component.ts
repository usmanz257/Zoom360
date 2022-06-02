import { Component, OnInit } from '@angular/core';
import { GetAllConnectionsService } from 'src/app/Services/extract/get-all-connections.service';

@Component({
  selector: 'app-connectors',
  templateUrl: './connectors.component.html',
  styleUrls: ['./connectors.component.css']
})
export class ConnectorsComponent implements OnInit {

  constructor(public AllConnectionsService:GetAllConnectionsService) { }

  ngOnInit(): void {
  }

}
