import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiHelperService } from 'src/app/service/api-helper.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
    addProductForm : FormGroup;
    imageSrc: string;
    successMsg:string;
  constructor(private formBuilder: FormBuilder ,private _apiHelp :ApiHelperService) { 
    this.addProductForm = this.formBuilder.group({
      image:new FormControl(null , Validators.required),
      title:new FormControl('',  Validators.required),
      description:new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      category: new FormControl('',Validators.required)
    })
  }
  categories$ : Observable<any>
  ngOnInit(): void {
    this.categories$ = this._apiHelp.getMethod(`/categories`);
   
  }
  
  uploadImage(event){
    const reader = new FileReader()
    if (event.target.files && event.target.files.length ){
      if ((event.target.files[0].type == "image/png") || (event.target.files[0].type == "image/jpeg") || (event.target.files[0].type == "image/jpg")) {
        const [file] =  event.target.files;
      reader.readAsDataURL(file);
      reader.onload =()=>{
       this.imageSrc = reader.result as string;
        this.addProductForm.patchValue({
          image :event.target.files[0].name
        })
      }
      }
      
    }
  }
  removeImg(){
        this.addProductForm.controls['image'].reset()
  }
  addProduct(form:FormGroup){
        this._apiHelp.postMethod(form.value).subscribe(
      result=>{
        this.successMsg = 'Product is added succefully'
          setTimeout(()=>{
          this.successMsg=''
        
        }, 2000);
        this.addProductForm.reset()
        
      },error=>{
        console.log(error)
      }
    )
  
  }
}
