import { Component, OnInit } from '@angular/core';
import { CoinsService } from '../coins.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
	transactions = []
  constructor(
  	private _httpService: CoinsService,
  	) { }

  ngOnInit() {
  	this.getLedger()
  }
  getLedger(){
  	this.transactions = this._httpService.ledger
  }

}