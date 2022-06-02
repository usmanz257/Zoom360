import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @ViewChild('videoPlayerModal',{static:true}) videoPlayerModal : ElementRef; 
  isPlay:string='Play';
  constructor() { }

  ngOnInit(): void {
  }
show(value){

  this.videoPlayerModal.nativeElement.className = "modal fade show";
  this.setTime(value);
}
hide(){
  
  this.videoPlayerModal.nativeElement.className = "modal hide";
}
playPause() {
  var myVideo: any = document.getElementById("my_video_1");
  if (myVideo.paused){
    myVideo.play();
    this.isPlay='Pause';
  } 
  else {
    myVideo.pause();
    this.isPlay='Play';
  };
}
setTime(sTime) {
  let video: any = document.getElementById("my_video_1");
  video.currentTime = sTime;
  video.play();
  this.isPlay='Pause';
}
}
