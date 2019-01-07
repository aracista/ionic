import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-daftar',
  templateUrl: './detail-daftar.page.html',
  styleUrls: ['./detail-daftar.page.scss'],
})
export class DetailDaftarPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
