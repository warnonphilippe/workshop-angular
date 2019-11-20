import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AccountService, StateStorageService } from './core';
import { ActivatedRoute } from '@angular/router';
import { LoginMultitenantService } from './core/login/login-multitenant.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private accountService: AccountService,
    private route: ActivatedRoute,
    private stateStorageService: StateStorageService,
    private loginService: LoginMultitenantService) {}


  isAuthenticated() {
    return this.accountService.isAuthenticated();
  }

  login() {
    this.loginService.login();
  }

  ngOnInit() {
    this.initMultitenant();
    this.initMultilanguage();
    this.accountService.identity();
  }

  initMultilanguage() {
    this.translate.addLangs(['en', 'fr', 'nl', 'de']);
    this.translate.setDefaultLang('fr');
  }

  initMultitenant() {
    let realm: string = null;

    this.route.queryParams.subscribe(params => {
        if (params['realm']) {
            realm = params['realm'];
        }
    });

    const url = new URL( window.location.href );
    const urlRealm = url.searchParams.get('realm');
    const hasRealm = this.hasCurrentRealm();
    if (realm) {
      console.log('stockage du realm depuis "activated route"', realm);
      this.setCurrentRealm(realm);
    } else if (urlRealm) {
      console.log('stockage du realm depuis url', urlRealm);
      this.setCurrentRealm(urlRealm);
    } else if ( !environment.production && !hasRealm ) {
      console.warn('stockage du realm "jhipster" car aucun realm fourni en parametre et mode production desactive');
      this.setCurrentRealm('jhipster');
    } else if ( !hasRealm ) {
      console.error('Attention : aucun realm configuré (appeler cette url avec la parametre get : ?realm=MONTENANT)');
    }
  }

  hasCurrentRealm() {
    return this.stateStorageService.getRealm() !== null && this.stateStorageService.getRealm() !== '';
  }

  setCurrentRealm(realm: string) {
    // memo l'ancien tenant
    const hasPreviousTenant = this.hasCurrentRealm();
    const prevTenant = this.stateStorageService.getRealm();
    this.stateStorageService.storeRealm(realm);
    // si différent du tenant précédent, on force un logout
    if (hasPreviousTenant && realm !== prevTenant) {
        this.loginService.logout();
    }
  }

}
