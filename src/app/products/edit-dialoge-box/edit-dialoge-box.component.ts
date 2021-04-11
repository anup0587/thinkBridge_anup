import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiHelperService } from 'src/app/service/api-helper.service';
import {SnackBarService}from '../../service/snack-bar.service'
@Component({
  selector: 'app-edit-dialoge-box',
  templateUrl: './edit-dialoge-box.component.html',
  styleUrls: ['./edit-dialoge-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditDialogeBoxComponent implements OnInit {
  @Input() public data;
  productForm :FormGroup
  @Output() passEntry :EventEmitter<any> = new EventEmitter()
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private _apiHelp: ApiHelperService,
    private _snackBarService : SnackBarService) { 
    this.productForm = this.formBuilder.group({
      id:new FormControl(''),
      category: new FormControl(''),
      description:new FormControl(''),
      title:new FormControl(''),
      price: new FormControl(''),
      image: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.productForm.setValue(this.data.data) 
    }
  passBack(value) {
    this.passEntry.emit(value);
  }

  closeDialog(){
    this.activeModal.close(true)
  }

  saveform(form:FormGroup){
    
    if(form.invalid){
      return false
    }else{
      this._apiHelp.putMethod(`/${form.value.id}`,form.value).subscribe(result=>{
        this.passBack(result)
       this. closeDialog()
      })
    }
  
  }
}
