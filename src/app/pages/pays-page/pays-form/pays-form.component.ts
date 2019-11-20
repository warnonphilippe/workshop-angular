import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {PageHeaderService} from '@civadis/primeng-layout';

@Component({
  selector: 'app-pays-form',
  templateUrl: './pays-form.component.html',
  styleUrls: ['./pays-form.component.scss']
})
export class PaysFormComponent implements OnInit {

  constructor(private pageHeaderService: PageHeaderService) { }

  ngOnInit() {
    this.pageHeaderService.notifyPageChange(
      ' Pays',
      'Formulaire pays',
      'fas fa-align-justify',
      [ { label: 'Modification du pays' } ] as MenuItem[]
    );
  }

}
