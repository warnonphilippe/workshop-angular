import { Component, OnInit } from '@angular/core';
import { SearchCriteria } from '@civadis/primeng-lib';
import { PageHeaderService } from '@civadis/primeng-layout';
import { MenuItem } from 'primeng/api';
import { UserExemple } from '../model/user-exemple';
import { ExempleService } from '../exemple.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-exemple-list',
    templateUrl: './exemple-list.component.html',
    styleUrls: ['./exemple-list.component.scss']
})
export class ExempleListComponent implements OnInit {

    currentSort = '';
    ascendingSort = true;
    search = '';

    criterias: SearchCriteria[] = [
        { label: 'nom', selected: false, icon: 'fas fa-user' },
        { label: 'adresse', selected: false, icon: 'fas fa-home' },
        { label: 'date de naissance', selected: false, icon: 'fas fa-calendar' }
    ];

    datas: UserExemple[];

    constructor(
      public pageHeaderService: PageHeaderService,
      public exempleService: ExempleService,
      public router: Router
      ) {}

    ngOnInit() {
        this.pageHeaderService.notifyPageChange(
            ' Exemple',
            'Exemple de liste',
            'fas fa-list',
            [{ label: 'Liste des DM' }] as MenuItem[]
        );
        this.loadList();
    }

    async loadList() {
        this.datas = await this.exempleService.list().toPromise();
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

    askEdit(event: MouseEvent, user: UserExemple) {
      this.router.navigate(['/exemple-form']);
    }

    askAdd(event: MouseEvent) {
      this.router.navigate(['/exemple-form']);
    }

    askDelete(event: MouseEvent, user: UserExemple) {
      event.stopPropagation();
      console.log('todo delete', user);
    }

}
