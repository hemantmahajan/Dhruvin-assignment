import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private appService : AppServiceService,
              private Router: Router 
              ,private spinner: NgxSpinnerService
    ) { }
  userList:any

  ngOnInit() {
    this.listUsers()
  }
  private gridApi;
  private gridColumnApi;

	columnDefs = [
		{headerName: 'Email', field: 'email' },
		{headerName: 'Name', field: 'name' },
		{headerName: 'Username', field: 'username' },
		{headerName: 'Website', field: 'website' },
		{headerName: 'Address', field: 'address',resizable: true  },
		{headerName: 'Phone', field: 'phone'}
	];

	rowData:any;
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();

  }

  listUsers(){
    this.spinner.show();
    this.appService.listUser().subscribe(
      (res) => {
        this.spinner.hide();
        this.rowData = res
        this.rowData.forEach(element => {
          let address = ''
          for(let x in element.address){
            if(x != 'geo' && x != 'zipcode'){
              address += element.address[x]+','
            }else if(x == 'zipcode'){
              address += element.address[x]+';'
            }
          }
          element.address = address
        });

        console.log(this.rowData, "<<<<<<<<<<<<<<<<<<<")

      }
    )
  }


  

}
