import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Customer } from './customer.interface';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { AppService } from './app.service';

// import { Observable } from 'rxjs/Observable';

@Component({

  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {


  datas: any = [
    {
      "Id": 1, "SecurityGroupId": "EDU", "FunctionName": null, "APIGet": null, "APIPost": null,
      "OrderNumber": 1, "DisplayName": "LastName", "Access": null, "ControlType": "textbox", "AttributeName": "LastName",
      "DefaultValue": null, "PlaceHolder": null, "ListValues": null, "PageNumber": 1, controlledValue:false
    }, {
      "Id": 2, "SecurityGroupId": "EDU",
      "FunctionName": null, "APIGet": null, "APIPost": null, "OrderNumber": 2, "DisplayName": "Brithday", "Access": null,
      "ControlType": "textbox", "AttributeName": "Birthday", "DefaultValue": null, "PlaceHolder": null, "ListValues": null, "PageNumber": 1,controlledValue:true
    },
    {
      "Id": 1, "SecurityGroupId": "EDU", "FunctionName": null, "APIGet": null, "APIPost": null,
      "OrderNumber": 1, "DisplayName": "FirstName", "Access": null, "ControlType": "textbox", "AttributeName": "FirstName",
      "DefaultValue": null, "PlaceHolder": null, "ListValues": null, "PageNumber": 1 ,controlledValue:false
    },
    {
      "Id": 1, "SecurityGroupId": "EDU", "FunctionName": null, "APIGet": null, "APIPost": null,
      "OrderNumber": 1, "DisplayName": "full name", "Access": null, "ControlType": "textbox", "AttributeName": "Full name",
      "DefaultValue": null, "PlaceHolder": null, "ListValues": null, "PageNumber": 1 ,controlledValue:true
    }
  ];

  public eduForm: FormGroup;
  public formData: any;
  public url: string = 'https://reqres.in/api/users?page=2';


  constructor(private formBuilder: FormBuilder, public http: HttpClient, public service: AppService) {

    this.eduForm = this.formBuilder.group({
      loadEduFormAttributes: ['', Validators.required]
    });

  }

  ngOnInit() {

    console.log('from line 44 ', this.formData)

    let promise = new Promise((resolve, reject) => {

      console.log('from 49')

      this.http.get(this.url).toPromise().then(data => {
        this.formData = this.datas;
        console.log('line 51', this.datas)
        var eduFormGroup = [];
        for (let info of this.formData) {
          eduFormGroup.push(info.DisplayName);
        }


        let group = {};
        for (let eduFormControl of eduFormGroup) {
          group[eduFormControl] = new FormControl('');

        }
        this.eduForm = new FormGroup(group);

        let eduData = this.eduForm;


        resolve(this.formData);
      },
        msg => { // Error
          reject(msg);
        })

    })
    promise.then(function (formData) {
      console.log('from line 80', formData)
    })

    promise.catch(function (value) {
      console.error('problem occured..');
    })
  }

  onSubmit(model: Customer) {
    // call API to save
    // ...
    debugger;
    console.log(model);
  }
}





// import { Component,OnInit } from '@angular/core';
// import {FormGroup,FormControl} from '@angular/forms';
// @Component({
//   selector: 'app',
//   templateUrl: 'app.component.html'
// })

// export class AppComponent implements OnInit{
//   data: any = [{"Id":1,"SecurityGroupId":"EDU","FunctionName":null,"APIGet":null,"APIPost":null,"OrderNumber":1,"DisplayName":"LastName","Access":null,"ControlType":"textarea","AttributeName":"LastName","DefaultValue":null,"PlaceHolder":null,"ListValues":null,"PageNumber":1},{"Id":2,"SecurityGroupId":"EDU","FunctionName":null,"APIGet":null,"APIPost":null,"OrderNumber":2,"DisplayName":"FirstName","Access":null,"ControlType":"textbox","AttributeName":"FirstName","DefaultValue":null,"PlaceHolder":null,"ListValues":null,"PageNumber":1}];

//   eduForm:FormGroup;

//   ngOnInit(){
//     this.eduForm = new FormGroup({
//       FirstName:new FormControl(),
//       LastName:new FormControl()

//     });
//   }

//   onSubmit() {
//     debugger;
//     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.data))
//   }
// }
