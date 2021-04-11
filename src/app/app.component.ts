import { Component ,OnInit } from '@angular/core';
import {ActivatedRoute ,NavigationEnd,Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'thinkBridge';
  showHeader = true;
  showFooter = true;
  constructor(private router :Router , private activeROute:ActivatedRoute){

  }
  ngOnInit(){
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.showHeader = this.activeROute.firstChild.snapshot.data.showHeader != false;
        this.showFooter = this.activeROute.firstChild.snapshot.data.showFooter != false;
      }
       

    })

  }
}
