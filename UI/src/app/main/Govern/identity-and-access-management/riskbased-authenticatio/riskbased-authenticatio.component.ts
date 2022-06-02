import { Component, OnInit, Inject, Injector, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { dropdownModel } from 'src/app/models/common/dropdownmodel';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { IdenstityAndAccessManagmentServiceService } from 'src/app/services/Govern/IdentityAccessManagement/idenstity-and-access-managment-service.service';
import { IdentityAccessManagmentModel } from 'src/app/models/Govern/IdentityAccessManagment.model';
import { ClientDetailService } from 'src/app/services/client-detail.service';
import { ClientDateTimeService } from 'src/app/services/client-date-time.service';
import { ClientDeviceInfoService } from 'src/app/services/client-DeviceInfo.service';
import { AppComponentBase } from 'src/app/services/AppComponentBase';
import { ButtonComponent } from 'ej-angular2';
import { ToastComponent, ToastPositionModel } from '@syncfusion/ej2-angular-notifications';
import { ToastMessage } from 'src/app/models/MessageTypes/toast-message';
import { GetIAM } from 'src/app/models/Govern/GetIAMModel';
@Component({
	selector: 'app-riskbased-authenticatio',
	templateUrl: './riskbased-authenticatio.component.html',
	styleUrls: ['./riskbased-authenticatio.component.css']
})
export class RiskbasedAuthenticatioComponent extends AppComponentBase implements OnInit {
	riskBasedAuth: FormGroup;
	dropdownNames: string[] = ["Device Type", "Connection Type", "Time Zone", "time slot", "Supervisor Name"];
	_deviceType: dropdownModel[] = [];
	_connectionType: dropdownModel[] = [];
	_timezone: dropdownModel[] = [];
	_timeSlot: dropdownModel[] = [];
	_supervisorName: dropdownModel[] = [];
	MACAccessToggle: boolean = false;
	IpAccessToggle: boolean = false;
	TimeZoneAccessToggle: boolean = false;
	TimeSlotAccessToggle: boolean = false;
	DeviceTypeAccesToggle: boolean = false;
	ConnectionTypeToggle: boolean = false;
	SupervisorAccessToggle: boolean = false
	sp_SaveUserProfile: string = 'SAVERBASETUP';
	ProcedureName = 'GETRBASETUP';
	getIAM:GetIAM = {} as GetIAM;
	public testToast=new ToastMessage();
	@ViewChild('defaulttoast',{static:true})
	public toastObj: ToastComponent;
	@ViewChild('toastBtnShow',{static:true})
	public position;
	field:object;
	public btnEleShow: ButtonComponent;
	constructor(
	injector:Injector,
	private fb: FormBuilder,
	public _idenstityAndAccessManagmentServiceService: IdenstityAndAccessManagmentServiceService) {
		super(injector);
	}

	ngOnInit(): void {
		this.position=this.testToast.position;
		this.getdropdown();
		this.createForm();
		this.getRiskBased();
	}
	createForm() {
		debugger
		this.riskBasedAuth = this.fb.group({
			RbaActivation: ['1'],
			RbaAccess: ['1'],
			SupervisorRiskSummarry: [true],
			UserRiskSummary: [true],
			//IPSummary :['1'],
			IpVerifcation: [],
			IpAccess: [false],
			MacAccess: [false],
			MacVerifcation: [],
			TimeZoneAccess: [false],
			TimeZoneVerifcation: [],
			TimeSlotAccess: [false],
			StartTimeVerifcation: [],
			EndTimeVerifcation: [],
			DeviceTypeAccess: [false],
			DeviceTypeVerifcation: [],
			ConnectorTypeAccess: [false],
			ConnectorTypeVerifcation: [],
			SupervisorAccess: [false],
			SupervisorVerifcation: []
			// dateFormat: ['', Validators.required ],
			// dateCollectedData: [false, Validators.required ],
		});
	}
	SaveConfig(identityControlData: IdentityAccessManagmentModel) {
		debugger
		identityControlData.ProcedureName = 'SAVERBASETUP';
		identityControlData.UserId = this.clientDetailService.getuserID();
		identityControlData.WorkspaceId=this.clientDetailService.getWorkspaceID();
		identityControlData.ClientId = this.clientDetailService.getClientID();
		identityControlData.ClientTime = this.clientDateTimeService.getCilentTime();
		identityControlData.ClientDate = this.clientDateTimeService.getCilentDate();
		identityControlData.ClientTimeZone = this.clientDateTimeService.getClientTimeZone();
		identityControlData.IpVerifcation = '';
		this._idenstityAndAccessManagmentServiceService.saveIdentityAccessManagementSetup(identityControlData).subscribe(
		(data:any) => {
			debugger
			console.log(data);
			this.testToast.toast[1].content=data.result;
			this.toastObj.show(this.testToast.toast[1]);
		},
		(err:any) => {
			debugger
			//this.testToast.toast[2].content='err.statusText';
			this.toastObj.show(this.testToast.toast[2]);
			console.log(err.statusText);
		});
	}
	getdropdown() {
		for (let i = 0; i < this.dropdownNames.length; i++) {
			if (this.dropdownNames[i] == 'Device Type') {
				debugger
				this._idenstityAndAccessManagmentServiceService.getIAMDropDown(this.dropdownNames[i])
					.subscribe((data: dropdownModel[]) => {
						if (data.length > 0) {
							this._deviceType = data;
							this.field = { dataSource: this._deviceType,text:'dropdownText',value:'dropdownValue'};
						}
					});
			}
			else if (this.dropdownNames[i] == 'Connection Type') {
				this._idenstityAndAccessManagmentServiceService.getIAMDropDown(this.dropdownNames[i])
					.subscribe((data: dropdownModel[]) => {
						if (data.length > 0) {
							this._connectionType = data;
							this.field = { dataSource: this._connectionType,text:'dropdownText',value:'dropdownValue'};
						}
					});
			}
			else if (this.dropdownNames[i] == 'Time Zone') {
				this._idenstityAndAccessManagmentServiceService.getIAMDropDown(this.dropdownNames[i])
					.subscribe((data: dropdownModel[]) => {
						if (data.length > 0) {
							this._timezone = data;
							this.field = { dataSource: this._timezone,text:'dropdownText',value:'dropdownValue'};
						}
					});
			}
			else if (this.dropdownNames[i] == 'time slot') {

				this._idenstityAndAccessManagmentServiceService.getIAMDropDown(this.dropdownNames[i])
					.subscribe((data: dropdownModel[]) => {
						debugger
						if (data.length > 0) {
							debugger
							this._timeSlot = data;
							this.field = { dataSource: this._timeSlot,text:'dropdownText',value:'dropdownValue'};
						}
					});
			}
			else if (this.dropdownNames[i] == 'Supervisor Name') {

				this._idenstityAndAccessManagmentServiceService.getIAMDropDown(this.dropdownNames[i])
					.subscribe((data: dropdownModel[]) => {
						debugger
						if (data.length > 0) {
							debugger
							this._supervisorName = data;
							this.field = { dataSource: this._supervisorName,text:'dropdownText',value:'dropdownValue'};
						}
					});
			}

		}
	}
	MacAccess(e) {
		if (e.target.checked) {
			this.MACAccessToggle = true;
		}
		else {
			this.MACAccessToggle = false;
			this.riskBasedAuth.patchValue({ MacVerifcation: '' });
		}
	}
	IpAccess(e) {
		if (e.target.checked) {
			this.IpAccessToggle = true;
		}
		else {
			this.IpAccessToggle = false;
			this.riskBasedAuth.patchValue({ IpVerifcation: '' });
		}
	}
	TimeZoneAccess(e) {
		if (e.target.checked) {
			this.TimeZoneAccessToggle = true;
		}
		else {
			this.TimeZoneAccessToggle = false;
			this.riskBasedAuth.patchValue({ TimeZoneVerifcation: '' });
		}
	}
	TimeSlotAccess(e) {
		if (e.target.checked) {
			this.TimeSlotAccessToggle = true;
		}
		else {
			this.TimeSlotAccessToggle = false;
			this.riskBasedAuth.patchValue({ StartTimeVerifcation: '' });
			this.riskBasedAuth.patchValue({ EndTimeVerifcation: '' });
		}
	}
	DeviceTypeAccess(e) {
		if (e.target.checked) {
			this.DeviceTypeAccesToggle = true;
		}
		else {
			this.DeviceTypeAccesToggle = false;
			this.riskBasedAuth.patchValue({ DeviceTypeVerifcation: '' });
		}

	}
	ConnectionType(e) {
		if (e.target.checked) {
			this.ConnectionTypeToggle = true;
		}
		else {
			this.ConnectionTypeToggle = false;
			this.riskBasedAuth.patchValue({ ConnectorTypeVerifcation: '' });
		}
	}
	SupervisorAccess(e) {
		if (e.target.checked) {
			this.SupervisorAccessToggle = true;
		}
		else {
			this.SupervisorAccessToggle = false;
			this.riskBasedAuth.patchValue({ SupervisorVerifcation: '' });
		}
	}
	getRiskBased() {
		debugger 
		this.getIAM.ProcedureName= this.ProcedureName;
		this.getIAM.clientId=this.clientDetailService.getClientID();
		this.getIAM.workspaceId=this.clientDetailService.getWorkspaceID();
		this.getIAM.userId=this.clientDetailService.getuserID();
		this._idenstityAndAccessManagmentServiceService.getIAM(this.getIAM).subscribe((data: any) => {
			// this.storageService.getItem("userId");
			debugger
			this.riskBasedAuth.patchValue({
				RbaActivation: data[0].rbA_ACTIVATION,
				RbaAccess: data[0].rbA_ACCESS,
				SupervisorRiskSummarry: data[0].supervisoR_RISKSUMMARY,
				UserRiskSummary: data[0].useR_RISKSUMMARY,
				IpVerifcation: data[0].iP_VERIFICATION,
				IpAccess: data[0].iP_ACCESS,
				MacAccess: data[0].maC_ACCESS,
				MacVerifcation: data[0].maC_VERIFICATION,
				TimeZoneAccess: data[0].timezonE_ACCESS,
				TimeZoneVerifcation: data[0].timezonE_VERIFICATION,
				TimeSlotAccess: data[0].timesloT_ACCESS,
				StartTimeVerifcation: data[0].starttimE_VERIFICATION,
				EndTimeVerifcation: data[0].endtimE_VERIFICATION,
				DeviceTypeAccess: data[0].devicetypE_ACCESS,
				DeviceTypeVerifcation: data[0].devicetypE_VERIFICATION,
				ConnectorTypeAccess: data[0].connectiontypE_ACCESS,
				ConnectorTypeVerifcation: data[0].connectiontypE_VERIFICATION,
				SupervisorAccess: data[0].supervisoR_ACCESS,
				SupervisorVerifcation: data[0].supervisoR_VERIFICATION,
			});
			if (data[0].iP_ACCESS == true) {
				this.IpAccessToggle = true;
			}
			else {
				this.IpAccessToggle = false;
			}
			if (data[0].maC_ACCESS == true) {
				this.MACAccessToggle = true;
			}
			else {
				this.MACAccessToggle = false;
			}
			if (data[0].timezonE_ACCESS == true) {
				this.TimeZoneAccessToggle = true;
			}
			else {
				this.TimeZoneAccessToggle = false;
			}
			if (data[0].timesloT_ACCESS == true) {
				this.TimeSlotAccessToggle = true;
			}
			else {
				this.TimeSlotAccessToggle = false;
			}
			if (data[0].devicetypE_ACCESS == true) {
				this.DeviceTypeAccesToggle = true;
			}
			else {
				this.DeviceTypeAccesToggle = false;
			}
			if (data[0].connectiontypE_ACCESS == true) {
				this.ConnectionTypeToggle = true;
			}
			else {
				this.ConnectionTypeToggle = false;
			}
			if (data[0].supervisoR_ACCESS == true) {
				this.SupervisorAccessToggle = true;
			}
			else {
				this.SupervisorAccessToggle = false;
			}
		});
	}
}
