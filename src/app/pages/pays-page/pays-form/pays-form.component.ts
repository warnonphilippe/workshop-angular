import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {PageHeaderService} from '@civadis/primeng-layout';
import {ButtonSaveComponent} from '@civadis/primeng-lib';
import {ExempleService} from '../../exemple-page/exemple.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pays-form',
  templateUrl: './pays-form.component.html',
  styleUrls: ['./pays-form.component.scss']
})
export class PaysFormComponent implements OnInit {
  @ViewChild('saveButton', {static: false}) saveButton: ButtonSaveComponent;
  saveLoading = false;

  constructor(
    public pageHeaderService: PageHeaderService,
    public exempleService: ExempleService,
    public router: Router
  ) { }

  ngOnInit() {
    this.pageHeaderService.notifyPageChange(
      ' Pays',
      'Formulaire pays',
      'fas fa-align-justify',
      [ { label: 'Modification du pays' } ] as MenuItem[]
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
    this.router.navigate(['/pays-list']);
  }


}
