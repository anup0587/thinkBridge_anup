import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiHelperService } from 'src/app/service/api-helper.service';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EditDialogeBoxComponent } from '../edit-dialoge-box/edit-dialoge-box.component';
import { SnackBarService } from 'src/app/service/snack-bar.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productName
  products
  constructor(private _apiHelp: ApiHelperService,
    private activeRoute: ActivatedRoute,
    private modalService: NgbModal,
    private _snackBarService :SnackBarService) {

  }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(params => {
      this.getProductList(params['category'])
    });
  }
  getProductList(productName) {
    let param = `/category/${productName}`
    this._apiHelp.getMethod(param).subscribe(result => {
       this.products = result
    })
  }

  detailProduct(id) {
    this._apiHelp.getMethod(id).subscribe(result => {
      console.log(result)
    })
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
