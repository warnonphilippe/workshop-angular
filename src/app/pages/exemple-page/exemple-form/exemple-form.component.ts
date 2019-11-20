import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonSaveComponent } from '@civadis/primeng-lib';
import { PageHeaderService } from '@civadis/primeng-layout';
import { ExempleService } from '../exemple.service';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exemple-form',
  templateUrl: './exemple-form.component.html',
  styleUrls: ['./exemple-form.component.scss']
})
export class ExempleFormComponent implements OnInit {

    @ViewChild('saveButton', {static: false}) saveButton: ButtonSaveComponent;
    tabIndex = 0;
    saveLoading = false;

    constructor(
      public pageHeaderService: PageHeaderService,
      public exempleService: ExempleService,
      public router: Router
    ) { }

    ngOnInit() {
      this.pageHeaderService.notifyPageChange(
          ' Exemple',
          'Exemple de formulaire',
          'fas fa-align-justify',
          [ { label: 'Modification du bon de commande' } ] as MenuItem[]
      );
    }

    async askSave() {
        try {
            this.saveLoading = true;
            await this.exempleService.save( /* myBean */ ).toPromise();
            this.saveButton.toggleSuccess();
        } catch (ex) {
            console.warn(ex);
            this.saveButton.toggleError();
        } finally {
            this.saveLoading = false;
        }
    }

    askBack() {
      this.router.navigate(['/exemple-list']);
    }

}
