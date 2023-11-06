import { Component } from '@angular/core';
import {Fournisseur} from '../../../core/fournisseur';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})

export class ListFournisseursComponent {
  listtest:string[] = [];
  constructor(private _test: TestService) {
    this.listtest = this._test.getList();
    console.log(this.listtest)
  }
  
  
  list: Fournisseur[] = [
    { idFournisseur: 1, code: '1ABC4522', libelle: 'hp' },
    { idFournisseur: 2, code: '2ABC4522', libelle: 'dell' },
    { idFournisseur: 3, code: '3ABC4522', libelle: 'lenovo' },
    { idFournisseur: 400, code: '40ABC452', libelle: 'asus' },
  ];
  delete(id: number) {
    this.list = this.list.filter((e) => e.idFournisseur != id);
  }
}