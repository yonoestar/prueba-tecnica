import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent  {

  @Input('data') factChar: any
  @Output() find: EventEmitter<any> = new EventEmitter()
  constructor() { }

  FindFactura(tarifa_id: any){
    this.find.emit({
      data:this.FindFactura
    })
  }

}
