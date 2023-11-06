import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseurRoutingModule } from './fournisseur-routing.module';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ListFournisseursComponent } from 'src/app/features/fournisseur/list-fournisseur/list-fournisseur.component';
import { TestService } from 'src/app/services/test.service';


@NgModule({
  declarations: [
    FournisseurComponent,
    ListFournisseursComponent
  ],
  imports: [
    CommonModule,
    FournisseurRoutingModule
  ],
  providers:[TestService]
})
export class FournisseurModule {
}