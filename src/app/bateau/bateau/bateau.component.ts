import {Component, OnInit, ViewChild, ElementRef, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, NumberValueAccessor} from "@angular/forms";
import {invalid} from "@angular/compiler/src/render3/view/util";
import {newArray} from "@angular/compiler/src/util";
import {repeat} from "rxjs";




@Component({
  selector: 'app-bateau',
  templateUrl: './bateau.component.html',
  styleUrls: ['./bateau.component.css'],
})

//Création de toutes les variables
export class BateauComponent implements OnInit {
  bateaux = new Array;
  detailsBateau = new Array;
  reference: string = "";
  longueur: string = "";
  gvl: string = "";
  gvsl: string = "";
  gve: string = "";
  gm: string = "";
  ge: string = "";
  ss: string = "";
  sa: string = "";
  gs: string = "";
  invalide: string = "";
  isCorrect: boolean = false;
  isSearchCorrect: boolean = false;
  completevalue: string = "";
  description = new Array(23);
  nameVoile = new Array(23);
  typeVoile: string = "";
  resultats = new Array;
  prix = new Array(23);




  constructor(
    private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  // Fonction qui permet de rechecher des bateaux avec une validation de caractères.
  getBateau(event: any) {

    let input = event.target.value;

    this.httpClient.get<any>('https://iwa2021.edriki.com/api/Boat/Search/' + input).subscribe(
      respond => {
        console.log(respond.response.datas);
        if (respond.response.datas == null)
        {
          this.isSearchCorrect = true;
          console.log(this.isSearchCorrect);
        }
        else
        {
          this.bateaux = respond.response.datas;
          this.isSearchCorrect = false;
          console.log(this.isSearchCorrect);
        }

      }
    );


  }

  clickBateau(refBateau: string) {

    console.log(refBateau);
    this.reference = refBateau;
    this.httpClient.get<any>('https://iwa2021.edriki.com/api/Boat/ByRef/' + this.reference).subscribe(
      respond => {
        console.log(respond.response.datas.lengthm);
        this.longueur = respond.response.datas.lengthm;
        console.log(respond.response.datas);
        this.gvl = respond.response.datas.sails.gvl;
        this.gvsl = respond.response.datas.sails.gvsl;
        this.gve = respond.response.datas.sails.gve;
        this.gm = respond.response.datas.sails.gm;
        this.ge = respond.response.datas.sails.ge;
        this.ss = respond.response.datas.sails.ss;
        this.sa = respond.response.datas.sails.sa;
        this.gs = respond.response.datas.sails.gs;



      }

    );


  }
  validerMesure(event:any){

      let input = event.target.value;
      if (Number(this.gvl && this.gvsl && this.gve && this.gm && this.ge && this.ss && this.gs))
      {
        let infobateau = new Set<string>();
        infobateau.add(this.gvl).add(this.gvsl).add(this.gve).add(this.gm).add(this.ge).add(this.ss).add(this.sa).add(this.gs);
        infobateau.forEach(function (value){
          console.log(value);


        })
        this.httpClient.get<any>('https://iwa2021.edriki.com/api/Item/Items?length='+ this.longueur + 'gvl='+ this.gvl +'&gvsl='+ this.gvsl +'&gve='+ this.gve+'&ss='+ this.ss+'&gs='+ this.gs+'').subscribe(
          respond => {
            console.log(respond.response.datas);
            for (let i = 0; i < 23; i++){
              this.resultats = respond.response.datas[i];
              this.description[i] = respond.response.datas[i].description;
              this.nameVoile[i] = respond.response.datas[i].name;
              this.prix[i] = respond.response.datas[i].price.unitPrice;


            }
          }
        )
        this.isCorrect = false;
        console.log(this.isCorrect);
      }
      else if(!Number(this.gvl && this.gvsl && this.gve && this.gm && this.ge && this.ss && this.gs))
      {
        this.isCorrect = true;
        console.log(this.isCorrect);

      }

  }











}
