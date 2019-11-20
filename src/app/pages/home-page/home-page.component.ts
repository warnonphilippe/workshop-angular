import { Component, OnInit } from '@angular/core';
import { PageHeaderService } from '@civadis/primeng-layout';
import { MenuItem } from 'primeng/api';
import { StateStorageService } from 'src/app/core';

 

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  helloInvoice: string;
   

  constructor(public pageHeaderService: PageHeaderService, public stateStorage: StateStorageService) { }

  ngOnInit() {
    this.pageHeaderService.notifyPageChange(
        ' Bienvenue !',
        'Application générée avec angular/cli & yeoman',
        'fas fa-home',
        [ { label: 'votre label' } ] as MenuItem[]
    );
  }

}
