import { Component, Input, OnInit, } from '@angular/core';
import { LayoutMenuComponent, LayoutCivadisComponent } from '@civadis/primeng-layout';

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html'
})
export class MenuLeftComponent implements OnInit {

    @Input() reset: boolean;

    model: any[];

    constructor(public app: LayoutCivadisComponent, public layoutMenu: LayoutMenuComponent) {}

    ngOnInit() {
        this.model = [
            { label: 'APP.MENU.DASHBOARD', icon: 'fas fa-fw fa-home', routerLink: ['/home'], isVisible: () => { return true; } },
            { label: 'Page d\'exemple', badgeStyleClass: 'orange-badge', badge: '!', icon: 'fas fa-fw fa-lightbulb', items: [
              { label: 'Liste', icon: 'fas fa-align-justify', routerLink: ['/exemple-list'], isVisible: () => { return true; } },
              { label: 'Détail', icon: 'fas fa-list', routerLink: ['/exemple-form'], isVisible: () => { return true; } },
            ] },

          { label: 'Pays', icon: 'fas fa-fw fa-flag', items: [
              { label: 'Liste', icon: 'fas fa-align-justify', routerLink: ['/pays-list'], isVisible: () => { return true; } },
              { label: 'Détail', icon: 'fas fa-list', routerLink: ['/pays-form'], isVisible: () => { return true; } },
            ] },

        ];
    }

}
