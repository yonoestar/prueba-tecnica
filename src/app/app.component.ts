import { Component, OnInit } from '@angular/core';

import resultFact from 'src/assets/json/fact.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  factura = []
  Facturas: any[] = resultFact;

  ngOnInit(){

  }

  findFactura(tarifa_id: number){
    this.Facturas.find(factura => {
console.log(factura)
    })
  }
}
