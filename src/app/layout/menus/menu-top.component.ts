import { Component, OnInit } from '@angular/core';
import { LayoutCivadisComponent } from '@civadis/primeng-layout';
import { LoginMultitenantService } from 'src/app/core/login/login-multitenant.service';
import { AccountService, Account } from 'src/app/core';
import { HttpResponse } from '@angular/common/http';

@Component({
    selector: 'app-menu-top',
    templateUrl: './menu-top.component.html'
})
export class MenuTopComponent implements OnInit {

    account: Account = null;

    constructor(
      private accountService: AccountService,
      private loginService: LoginMultitenantService,
      public app: LayoutCivadisComponent) {}

    ngOnInit() {
      this.loadCurrentUser();
    }

    logout() {
      this.loginService.logout();
    }

    async loadCurrentUser() {
      const response: HttpResponse<Account> = await this.accountService.fetch().toPromise();
      this.account = response.body;
    }

}
