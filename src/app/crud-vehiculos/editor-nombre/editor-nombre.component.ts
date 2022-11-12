import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editor-nombre',
  templateUrl: './editor-nombre.component.html',
  styleUrls: ['./editor-nombre.component.scss'],
})
export class EditorNombreComponent implements OnInit {

  // Creacion de input
  @Input() nombre = "";

  // Creacion de output
  @Output() cambioNombre = new EventEmitter();


  vehiculos = 'Vehículos';
  constructor() {}

  ngOnInit(): void {}

  //variables
  edad = 0;

  //Función
  cambiarNombre(): void {
    this.cambioNombre.next(this.nombre);
  }



}
