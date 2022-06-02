import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientDateTimeService {
  ClientDate:Date;
  ClientTime:Date;
  ClientTimeZone:Date;
  constructor(public datepipe: DatePipe) {
  
    }
    getCilentDate(){
    this.ClientDate=new Date();
    let latest_date =this.datepipe.transform(this.ClientDate, 'yyyy-MM-dd');
    return latest_date;
    }
    getCilentTime(){
    this.ClientTime=new Date();
    let latest_Time =this.datepipe.transform(this.ClientTime, 'mediumTime');
    return latest_Time;
    }
    getClientTimeZone(){
    this.ClientTimeZone=new Date();
    let Timezone=this.datepipe.transform(this.ClientTimeZone,'zzzz');
    return Timezone;
    }
}
