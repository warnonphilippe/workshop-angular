import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {PageHeaderService} from '@civadis/primeng-layout';
import {PaysService} from '../pays.service';
import {Router} from '@angular/router';
import {Pays} from '../../../shared/models/pays';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pays-list',
  templateUrl: './pays-list.component.html',
  styleUrls: ['./pays-list.component.scss']
})
export class PaysListComponent implements OnInit {

  constructor(public pageHeaderService: PageHeaderService,
              public paysService: PaysService,
              public router: Router) { }

  datas: Pays[];
  pays$: Observable<Pays[]>;
  currentSort = '';
  ascendingSort = true;

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

  // retourne l'observable qui contient les pays, doit être binded avec | async dans l'écran
  refreshPays() {
    this.pays$ = this.paysService.findAll();
  }

  // retourne les données de l'observable
  // async / await
  async refreshPays2() {
    try {
      // await va attendre le résultat de l'Observable
      this.datas = await this.paysService.findAll().toPromise();
    } catch (ex) {
    }
  }

  // retourne les données de l'observable
  refreshPays3() {
    this.paysService.findAll().subscribe(
      res => {
        this.datas = res;
      }
    );
  }

  sort(column: string) {
    if (column !== this.currentSort) {
      this.ascendingSort = true;
    }
    this.currentSort = column;
    this.datas.sort( (el1, el2) =>
      el1[column] === el2[column] ? 0 : ( el1[column] > el2[column] && this.ascendingSort ? 1 : -1 )
    );
  }

  askEdit(event: MouseEvent, pays: Pays) {
    this.router.navigate(['/pays-form'], pays.id);
  }

  askAdd(event: MouseEvent) {
    this.router.navigate(['/pays-form']);
  }

  askDelete(event: MouseEvent, pays: Pays) {
    event.stopPropagation();
    console.log('todo pays', pays);
  }


}
