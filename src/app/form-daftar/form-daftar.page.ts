import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-form-daftar',
  templateUrl: './form-daftar.page.html',
  styleUrls: ['./form-daftar.page.scss'],
})
export class FormDaftarPage implements OnInit {

	formDaftar: any = {
		name: '',
		idNumb: '',
		address: '',
		mobileNumber: ''
	}

  constructor(public router: Router, public storage: Storage) { }

  ngOnInit() {
  }

	submitRegister(){
		this.storage.set('formDaftar', this.formDaftar);
		this.router.navigate(['/detail-daftar']);

	}
}
