import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BusinessService } from './Business.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Business',
	templateUrl: './Business.component.html',
	styleUrls: ['./Business.component.css'],
  providers: [BusinessService]
})
export class BusinessComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          sbi = new FormControl("", Validators.required);
        
  
      
          address1 = new FormControl("", Validators.required);
        
  
      
          address2 = new FormControl("", Validators.required);
        
  
      
          county = new FormControl("", Validators.required);
        
  
      
          postcode = new FormControl("", Validators.required);
        
  
      
          owner = new FormControl("", Validators.required);
        
  
      
          incomingAnimals = new FormControl("", Validators.required);
        
  


  constructor(private serviceBusiness:BusinessService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          sbi:this.sbi,
        
    
        
          address1:this.address1,
        
    
        
          address2:this.address2,
        
    
        
          county:this.county,
        
    
        
          postcode:this.postcode,
        
    
        
          owner:this.owner,
        
    
        
          incomingAnimals:this.incomingAnimals
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceBusiness.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: "com.biz.Business",
      
        
          "sbi":this.sbi.value,
        
      
        
          "address1":this.address1.value,
        
      
        
          "address2":this.address2.value,
        
      
        
          "county":this.county.value,
        
      
        
          "postcode":this.postcode.value,
        
      
        
          "owner":this.owner.value,
        
      
        
          "incomingAnimals":this.incomingAnimals.value
        
      
    };

    this.myForm.setValue({
      
        
          "sbi":null,
        
      
        
          "address1":null,
        
      
        
          "address2":null,
        
      
        
          "county":null,
        
      
        
          "postcode":null,
        
      
        
          "owner":null,
        
      
        
          "incomingAnimals":null
        
      
    });

    return this.serviceBusiness.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "sbi":null,
        
      
        
          "address1":null,
        
      
        
          "address2":null,
        
      
        
          "county":null,
        
      
        
          "postcode":null,
        
      
        
          "owner":null,
        
      
        
          "incomingAnimals":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "com.biz.Business",
      
        
          
        
    
        
          
            "address1":this.address1.value,
          
        
    
        
          
            "address2":this.address2.value,
          
        
    
        
          
            "county":this.county.value,
          
        
    
        
          
            "postcode":this.postcode.value,
          
        
    
        
          
            "owner":this.owner.value,
          
        
    
        
          
            "incomingAnimals":this.incomingAnimals.value
          
        
    
    };

    return this.serviceBusiness.updateAsset(form.get("sbi").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceBusiness.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceBusiness.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "sbi":null,
          
        
          
            "address1":null,
          
        
          
            "address2":null,
          
        
          
            "county":null,
          
        
          
            "postcode":null,
          
        
          
            "owner":null,
          
        
          
            "incomingAnimals":null 
          
        
      };



      
        if(result.sbi){
          
            formObject.sbi = result.sbi;
          
        }else{
          formObject.sbi = null;
        }
      
        if(result.address1){
          
            formObject.address1 = result.address1;
          
        }else{
          formObject.address1 = null;
        }
      
        if(result.address2){
          
            formObject.address2 = result.address2;
          
        }else{
          formObject.address2 = null;
        }
      
        if(result.county){
          
            formObject.county = result.county;
          
        }else{
          formObject.county = null;
        }
      
        if(result.postcode){
          
            formObject.postcode = result.postcode;
          
        }else{
          formObject.postcode = null;
        }
      
        if(result.owner){
          
            formObject.owner = result.owner;
          
        }else{
          formObject.owner = null;
        }
      
        if(result.incomingAnimals){
          
            formObject.incomingAnimals = result.incomingAnimals;
          
        }else{
          formObject.incomingAnimals = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "sbi":null,
        
      
        
          "address1":null,
        
      
        
          "address2":null,
        
      
        
          "county":null,
        
      
        
          "postcode":null,
        
      
        
          "owner":null,
        
      
        
          "incomingAnimals":null 
        
      
      });
  }

}
