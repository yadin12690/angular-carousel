import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {

  constructor(private http: HttpClient) { }

  breakpoint;
  dataToDisplay = '';
  salePrice: boolean = false;

  ngOnInit(): void {
    this.http
      .get('./assets/data.json')
      .subscribe(res => {
        const myData = res;
        this.managedata(myData);
      },error => console.log('ERROR', error));
  }

  managedata(myData) {
    //console.log(myData.rss.channel);
    this.dataToDisplay = myData.rss.channel.item;

    console.log(this.dataToDisplay);

    for (let i = 0; i <= this.dataToDisplay.length; i++) {
      try {
        if (typeof(this.dataToDisplay[i]) !==  'undefined') {
          if (this.dataToDisplay[i]["g:sale_price"] !== "" && this.dataToDisplay[i]["g:sale_price"] !== undefined && typeof(this.dataToDisplay[i]["g:sale_price"]) !==  'undefined') {
            this.salePrice = true;
          }
          else {
            this.salePrice = false;
          }
        }

      }
      catch (e) {
        console.log(e);
      }

    }
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 2 : 4;
  }

}
