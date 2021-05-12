import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-veiw',
  templateUrl: './veiw.component.html',
  styleUrls: ['./veiw.component.css']
})
export class VeiwComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private appService: AppServiceService,
    private spinner: NgxSpinnerService) { }
  cat: any;
  photos: any;
  searchForm = new FormControl('');
  value = ''
  ngOnInit() {
    this.getPhotos();
  }



  getPhotos() {
    this.spinner.show();
    this.appService.getPic().subscribe(
      (res) => {
        this.spinner.hide();
        console.log(res, "<<<<<<<<<<<<<<<<<<<")
        this.photos = res
      }
    )
  }



  veiwDetails(cat) {
    window.open(cat.url, "_blank")
  }
  
}
