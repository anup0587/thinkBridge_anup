import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { EditDialogeBoxComponent } from '../products/edit-dialoge-box/edit-dialoge-box.component';

import {ApiHelperService} from '../service/api-helper.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  

  constructor(private _apiHelp :ApiHelperService ,private modalService: NgbModal ) { }
  products
  products$:Observable<any>;
  ngOnInit(): void {
    // get all prodcut categories
   // this.products$ = this._apiHelp.getMethod(`/categories`)
   this.getAllProduct()
  }
    getAllProduct(){
      this._apiHelp.getMethod('').subscribe(
        response=>{
          this.products = response
        }
      )
    }

    // dialog box parameter
  ngbModalEditOption: NgbModalOptions = {
    backdrop: "static",
    keyboard: false,
    windowClass: 'modify-modal blue-modal-sm'
  };
  
  editProduct(item) {
    const modalRef = this.modalService.open(EditDialogeBoxComponent, this.ngbModalEditOption)
    modalRef.componentInstance.data = {
      data: item
    }
    modalRef.componentInstance.passEntry.subscribe((result) => {
      let item = this.products.find(product=> product.id == result.id)
     let index =this.products.indexOf(item);
     this.products[index] = result;
 
    })
  }

  delete(item){
    this._apiHelp.deleteMethod(`/${item.id}`).subscribe(result=>{
     this.products = this.products.filter(product=> product.id != result.id)
     })
  }
}
