import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contoh',
  templateUrl: './contoh.page.html',
  styleUrls: ['./contoh.page.scss'],
})
export class ContohPage implements OnInit {

	title: string = 'Pasar';
	buah: any = [
	{nama: 'jambu',rasa: 'manis', harga: 1000},
	{nama: 'jeruk',rasa: 'asam',  harga: 1000}
	];
	ikan: any = [
	{nama: 'hiu',rasa: 'air asin', harga: 1000},
	{nama: 'paus',rasa: 'air tawar', harga: 1000}
	];
	sayur: any = [
	{nama: 'brokolo',rasa: 'hijau', harga: 1000},
	{nama: 'kol',rasa: 'putih', harga: 1000}
	];
	cart: any[] = [];
	state: number = 0;
	total: number = 0;

  constructor() { }

  ngOnInit() {
  }


open(state){
	this.state = state;
	}

add(item){
var harga = parseInt(item.harga);
	this.total = this.total + item.harga; 
	this.cart.push(item);
	}
delete(index, item){
	
	this.cart.splice(index, 1);
	this.total = this.total - index.harga; 
	}
}
