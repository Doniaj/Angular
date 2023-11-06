import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ListFournisseursComponent } from './list-fournisseur/list-fournisseur.component';

const routes: Routes = [
  { path: 'list', component: ListFournisseursComponent },
  { path: ':id', component: FournisseurComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FournisseurRoutingModule { }