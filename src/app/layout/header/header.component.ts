import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiHelperService } from 'src/app/service/api-helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  categories$ : Observable<any>
  constructor(private _apiHelp :ApiHelperService,private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this.categories$ = this._apiHelp.getMethod(`/categories`);
    
  }

 navigateTo(param){
       this._router.navigate(['/products/product-list'], { queryParams: { category: param }});
    
  }
}
