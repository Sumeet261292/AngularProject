import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsDataService } from './../service/data/items-data.service';

export class Item {
  constructor(
    public name: string,	
    public price: number,
    public location: string,
    public quantity: number
  ){

  }
}

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  items: Item[]
  
  constructor(
    private itemService: ItemsDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshItems();
  }

  refreshItems(){
    this.itemService.retrieveAllItems().subscribe(
      response => {
        console.log(response);
        this.items = response;
      }
    )
  }

  buyItem(name){
    this.router.navigate(['cart',name]);
  }

}
