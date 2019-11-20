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

    this.initForm();

    this.route.params.subscribe(params => {
      const id: string = params['id']
      if (id){
        this.loadPays(id);
      }
    });

  }

  initForm() {
    this.formGroup = this.fb.group({
      'codeIso2': ['', Validators.compose([
        Validators.required,
        Validators.maxLength(2)
      ])],
      'codeIso3': ['', Validators.compose([
        Validators.required,
        Validators.maxLength(3)
      ])]
    });
  }

  loadPays(id: string) {
    this.paysService.findById(id).subscribe(
      pays => {
        this.formGroup.patchValue({
          id: pays.id,
          codeIso2: pays.codeIso2,
          codeIso3: pays.codeIso3
        });
      }
    );
  }

  private extractPays(): Pays {
    return {
      ...{} as Pays,
      id: this.formGroup.get(['id']).value,
      codeIso2: this.formGroup.get(['codeIso2']).value,
      codeIso3: this.formGroup.get(['codeIso3']).value
    };
  }

  async askSave() {
    try {
      this.saveLoading = true;
      console.warn(this.extractPays());
      // TODO implementer save dans paysService et l'appeler
      // await this.paysService.save(this.extractPays()).toPromise();
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
