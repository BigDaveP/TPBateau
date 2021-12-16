import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Input} from "@angular/core";
import {BateauComponent} from "../bateau/bateau/bateau.component";

@Component({
  selector: 'app-detail-bateau',
  templateUrl: './detail-bateau.component.html',
  styleUrls: ['./detail-bateau.component.css']
})
export class DetailBateauComponent implements OnInit {


  @Input() bateaudetail: string;

  constructor(
    private httpClient: HttpClient) {
  }

  reference: string = "";

  ngOnInit(): void {
    console.log(this.bateaudetail);
  }


  }
