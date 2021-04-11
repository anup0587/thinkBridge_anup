import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {LoaderService} from '../../service/loader.service'
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  isLoading$ : Subject<boolean>
  constructor(private _loaderService : LoaderService ) { 
      this.isLoading$ = this._loaderService.isLoading
  }

  ngOnInit(): void {
  }

}
