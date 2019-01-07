import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-detail-daftar',
  templateUrl: './detail-daftar.page.html',
  styleUrls: ['./detail-daftar.page.scss'],
})
export class DetailDaftarPage implements OnInit {

	data: any = {};

  constructor(public storage: Storage) {
   }

  ngOnInit() {
  }

  ngAfterViewInit(){
  	this.storage.get('formDaftar').then((valueFormDaftar) => {
    this.data = valueFormDaftar;
  	});
  }

}
