import { Component, OnInit } from '@angular/core';

import { ProductosServices } from './productos.service';

import {MatPaginatorModule} from '@angular/material/paginator';

export interface RootObject {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  category: string;
}

const ELEMENT_DATA : RootObject [] = [];


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  

  displayedColumns: string[] = ['id', 'title', 'description', 'price', 'brand', 'category'];
  dataSource = ELEMENT_DATA;

  constructor(private readonly productosService: ProductosServices) {
    
  }

  ngOnInit(): void {
    this.getTable();
  }

  getTable(): void {
    this.productosService.getProductos().subscribe(data => {
      console.log(data);
      this.dataSource = data;
    }
    );
  }

}
