import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  constructor() {}

  ngOnInit() {
    let numero = 10 ;
    debugger;
    numero = numero + 50 ;
    console.log(numero);
  }
}
