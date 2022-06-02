import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';
import {observable, Observable} from 'rxjs';
import { Router } from '@angular/router';
  
 

@Injectable({
  providedIn: 'root'
})

export class googleoauth {
 url='https://localhost:44397';
 URL='https://oauth2.googleapis.com/token';
 Token:string;
    constructor(private _http: HttpClient, private router: Router) 
    { }
    GetToken(code:string){
  debugger
  var obj={
    "code":code,
    "client_id":"101852806266-tacnlqnqqd5h6i7iilf2mn5a2e4aemot.apps.googleusercontent.com",
    "client_secret":"Dqvu62ldNAKazTBdgY5VYKcj",
    "redirect_uri":"http://localhost:4200/extract/extraction/summary",
    "grant_type":"authorization_code"
     
  }
    this._http.post(`${this.URL}`,obj).subscribe((data:any)=>{
        debugger
        var data=data.access_token;
        console.log(data);
         var geturl="https://www.googleapis.com/drive/v2/files?access_token="+data;
        this._http.get(`${geturl}`).subscribe((data:any)=>{
          debugger
          var mydata=data;
          console.log(mydata);
        });
      
    });
}
 
uploadfile(code:string){
  debugger
  var obj={
    "code":code,
    "client_id":"101852806266-tacnlqnqqd5h6i7iilf2mn5a2e4aemot.apps.googleusercontent.com",
    "client_secret":"Dqvu62ldNAKazTBdgY5VYKcj",
    "redirect_uri":"http://localhost:4200/extract/AddNewConnection/Configuration",
    "grant_type":"authorization_code"
     
  }
    this._http.post(`${this.URL}`,obj).subscribe((data:any)=>{
        debugger
        this.Token=data.access_token;

        console.log(data);
         
      
    });
}
uploadfileondrive(formdata){
  debugger
   
  const options = {
    headers: new HttpHeaders()
    .append('Authorization', 'Bearer '+this.Token)
    .append("Content-Type","multipart/related; boundary=bound1"),
    // headers.setRawHeader("Content-Type","multipart/related; boundary=bound1"); 
    params: new HttpParams().append('uploadType','multipart')
  }
  return this._http.post('https://www.googleapis.com/upload/drive/v2/files?uploadType=media',formdata,options).subscribe((data:any)=>{
   debugger
  console.log(data);
  });

}
gettokenforfacebook(url:string){
  debugger
  let params = new HttpParams().set("url",url);
  this._http.get(`${this.url+'/api/SqlConnector/GetResponseString'}`,{params:params}).subscribe((data:any)=>{
    debugger 
    var token =data;
   
     alert(token);
     console.log(token);
  });

}

fbUrl(url:string){
  debugger
  // let params = new HttpParams().set("url",url);
  this._http.get(`${url}`).subscribe((data:any)=>{
    debugger 
    var token =data.access_token;
    alert(token);
    console.log(token);
  });

}
}