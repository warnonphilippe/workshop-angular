import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {PageHeaderService} from '@civadis/primeng-layout';

@Component({
  selector: 'app-pays-list',
  templateUrl: './pays-list.component.html',
  styleUrls: ['./pays-list.component.scss']
})
export class PaysListComponent implements OnInit {

  constructor(private pageHeaderService: PageHeaderService) { }

  ngOnInit() {
    this.pageHeaderService.notifyPageChange(
      ' Pays',
      'Liste des pays',
      'fas fa-align-justify',
      [ { label: 'Liste des pays' } ] as MenuItem[]
    );
  }

}
