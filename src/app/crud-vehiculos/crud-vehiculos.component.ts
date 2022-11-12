import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA: any = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

// /**
//  * @title Basic use of `<table mat-table>`
//  */
// @Component({
//   selector: 'table-basic-example',
//   templateUrl: "./table-basic.examples.html",
//   styleUrls: ['table-basic-example.css']
// })
// export class TableBasicExample {
//   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
//   dataSource = ELEMENT_DATA;
// }

@Component({
  selector: 'crud-vehiculos',
  templateUrl: './crud-vehiculos.component.html',
  styleUrls: ['./crud-vehiculos.component.scss'],
})
export class CrudVehiculosComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  vehiculos = 'Vehículos';
  nombreUsuario = '';

  constructor() {}

  value = 'Ingrese la placa del vehículo';

  ngOnInit(): void {}

  //variables
  edad=0;




  //Función
  cambiarTitulo(): void{
    this.vehiculos = "Carritos Bonitos";
  }

  seleccionarName(nombreNuevo: string): void{
    this.nombreUsuario= nombreNuevo;
  }

  cambiarNombreUsuario(nombreNuevo: string): void{
    for (const key in this.dataSource) {
      if(this.dataSource[key].name == this.nombreUsuario){
        this.dataSource[key].name = nombreNuevo;
        return;
      }

      }
    }
  }

