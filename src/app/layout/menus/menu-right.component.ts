import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu-right',
  templateUrl: './menu-right.component.html'
})
export class MenuRightComponent implements OnInit {

    apps: any = [];

    constructor() {}

    ngOnInit() {
        const message = 'gestionnaire de vos procédures d’engagement & publication de vos offres';
        this.apps = [
            { icon: 'fas fa-handshake', titre: 'RHP Recrutement', message: message },
            { icon: 'fas fa-university', titre: 'RHP Formation', message: message },
            { icon: 'fas fa-money-bill-alt', titre: 'RHP Paie', message: message },
            { icon: 'fas fa-hand-point-up', titre: 'RHP Pointage', message: message },
            { icon: 'fas fa-shopping-cart', titre: 'CPT Bon de commande', message: message },
            { icon: 'fas fa-archive', titre: 'CPT Facturation', message: message },
        ];
    }

}
