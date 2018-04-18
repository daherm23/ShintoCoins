import { Component, OnInit } from '@angular/core';
import { CoinsService } from '../coins.service';


@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
	result = ""
  constructor(
  	private _httpService: CoinsService,
	) { }

  ngOnInit() {
  }
  mineSubmit(answer){
  	console.log(answer)
  	if (answer == 13){
  		this._httpService.newTransaction("Mined", 1)
  		this._httpService.coinCount++
  		this._httpService.value++
  		console.log(this._httpService.coinCount)
  		this.result = "Correct! You mined a new ShintoCoin!"
  	}
  	else{
  		this.result = "Incorrect! No new coins mined"
  	}
  }
}