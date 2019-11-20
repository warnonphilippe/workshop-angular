import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {PageHeaderService} from '@civadis/primeng-layout';
import {ButtonSaveComponent} from '@civadis/primeng-lib';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PaysService} from '../pays.service';
import {Pays} from '../../../shared/models/pays';

@Component({
  selector: 'app-pays-form',
  templateUrl: './pays-form.component.html',
  styleUrls: ['./pays-form.component.scss']
})
export class PaysFormComponent implements OnInit {

  formGroup: FormGroup = null;
  id: string = null;
  currentPays: Pays = {};

  @ViewChild('saveButton', {static: false}) saveButton: ButtonSaveComponent;
  saveLoading = false;

  constructor(
    public fb: FormBuilder,
    public pageHeaderService: PageHeaderService,
    public paysService: PaysService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pageHeaderService.notifyPageChange(
      ' Pays',
      'Formulaire pays',
      'fas fa-align-justify',
      [ { label: 'Modification du pays' } ] as MenuItem[]
    );

    this.route.params.subscribe( params =>
        // this.id = params.get('id')
       // TODO = get pays by ID
        this.currentPays = {codeIso2: 'BE', codeIso3: 'BEL'} as Pays
    );

    this.initForm();
  }

  initForm() {
    this.formGroup = this.fb.group({
      'codeIso2': [this.currentPays.codeIso2, Validators.compose([
        Validators.required,
        Validators.maxLength(2)
      ])],
      'codeIso3': [this.currentPays.codeIso3, Validators.compose([
        Validators.required,
        Validators.maxLength(3)
      ])]
    });
  }

  async askSave() {
    try {
      this.saveLoading = true;
      // TODO implementer save dans paysService et l'appeler
      // await this.paysService.save( /* myBean */ ).toPromise();
      console.warn(this.formGroup.value);
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
