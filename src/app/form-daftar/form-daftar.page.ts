import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(public router: Router) { }

  ngOnInit() {
  }

	submitRegister(){
		this.router.navigate(['/detail-daftar', {data: this.formDaftar}]);

	}
}
