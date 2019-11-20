import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {PageHeaderService} from '@civadis/primeng-layout';
import {PaysService} from '../pays.service';

@Component({
  selector: 'app-pays-list',
  templateUrl: './pays-list.component.html',
  styleUrls: ['./pays-list.component.scss']
})
export class PaysListComponent implements OnInit {

  constructor(public pageHeaderService: PageHeaderService, public paysService: PaysService) { }

  ngOnInit() {
    this.pageHeaderService.notifyPageChange(
      ' Pays',
      'Liste des pays',
      'fas fa-align-justify',
      [ { label: 'Liste des pays' } ] as MenuItem[]
    );
    // lance la fonction asynchrone
    this.refreshPays();
    console.log('passe avant le retour de refreshPays car refreshPays est async');
  }

  async refreshPays() {
    try {
      // await va attendre le résultat de l'Observable
      const paysList = await this.paysService.findAll().toPromise();
      console.log(paysList);
    } catch (ex) {

    }
  }

}
