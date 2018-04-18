import { Component, OnInit } from '@angular/core';
import { CoinsService } from '../coins.service';


@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
	value: number;
	count: number;
	error: string;
  constructor(
  	private _httpService: CoinsService,
  	) {
  	this.value = this._httpService.value
  	this.count = this._httpService.coinCount
  }

  ngOnInit() {
  }
  sellFunc(num){
  	num = parseInt(num)
	  	if (num <= this.count) {
  			this._httpService.newTransaction("Sold", num)
  			this._httpService.coinCount-=num
  			this._httpService.value-=num
  			this.value = this._httpService.value
  		  	this.count = this._httpService.coinCount
  		}
  		else{
  			this.error = "You cannot sell more than you have!"
  		}
  }	
}