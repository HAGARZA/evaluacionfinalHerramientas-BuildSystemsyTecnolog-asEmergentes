import { Component, OnInit } from '@angular/core';
import {Producto} from '../model/producto';

@Component({
  selector: 't-catalogo-de-productos',
  templateUrl: './catalogo-de-productos.component.html',
  styleUrls: ['./catalogo-de-productos.component.css']
})
export class CatalogoDeProductosComponent implements OnInit {

  titulo = 'Catalogo de productos';
  productos = [
    new Producto(1, 'Aguacate', 5, 100),
    new Producto(2, 'Ajo', 2, 24),
    new Producto(3, 'Almendras', 3, 50),
    new Producto(4, 'Arandanos', 6, 23),
    new Producto(5, 'Brocoli', 10, 66),
    new Producto(6, 'Calabaza', 15, 43),
    new Producto(7, 'Canela', 4, 23),
    new Producto(8, 'Cebolla', 6, 66),
    new Producto(9, 'Fresa', 7, 90),
    new Producto(10, 'Kiwi', 12, 123),
    new Producto(11, 'Limon', 2, 321),
    new Producto(12, 'Lyche', 18, 145),
    new Producto(13, 'Maiz', 10, 150),
    new Producto(14, 'Manzana', 15, 333),
    new Producto(15, 'Naranja', 4, 444),
    new Producto(16, 'Papa', 10, 65),
    new Producto(17, 'Pasta', 9, 34),
    new Producto(18, 'Pimienta', 2, 55),
    new Producto(19, 'Repollo', 5, 45),
    new Producto(20, 'Tomate', 14, 65),
    new Producto(21, 'Zanahoria', 16, 22),

  ];

  constructor() { }

  ngOnInit() {


  }

}
