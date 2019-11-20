import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateStorageService } from '../auth/state-storage.service';
import { AuthServerProvider } from '../auth/auth-session.service';

/**
 *  @author: Civadis, blueprint generator
 */
@Injectable({ providedIn: 'root' })
export class LoginMultitenantService {

  constructor(
    private activatedRoute: ActivatedRoute,
    private authServerProvider: AuthServerProvider,
    private stateStorageServive: StateStorageService) {}

  login() {
    // recherche du realm dans le params et stockage
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['realm']) {
        this.stateStorageServive.storeRealm(params['realm']);
      }
    });

    // récupère le realm du stockage, issu des params ou d'un stockage précédent
    const realm = this.stateStorageServive.getRealm();
    console.log('current realm to log in', realm);

    const port = location.port ? ':' + location.port : '';
    let contextPath = location.pathname;
    if (contextPath.endsWith('accessdenied')) {
      contextPath = contextPath.substring(0, contextPath.indexOf('accessdenied'));
    }
    if (!contextPath.endsWith('/')) {
      contextPath = contextPath + '/';
    }

    // If you have configured multiple OIDC providers, then, you can update this URL to /login.
    // It will show a Spring Security generated login page with links to configured OIDC providers.
    // On decide de ne PAS mettre le contextPath, pour mieux configurer le proxyconf sur des routes biens définies
    location.href = `//${location.hostname}:${location.port}/oauth2/authorization/${realm}`;
  }

  logout() {
    this.authServerProvider.logout().subscribe(response => {
      const data = response.body;
      let logoutUrl = data.logoutUrl;
      // if Keycloak, uri has protocol/openid-connect/token
      if (logoutUrl.indexOf('/protocol') > -1) {
        logoutUrl = logoutUrl + '?redirect_uri=' + window.location.origin;
      } else {
        // Okta
        logoutUrl = logoutUrl + '?id_token_hint=' + data.idToken + '&post_logout_redirect_uri=' + window.location.origin;
      }
      window.location.href = logoutUrl;
    });
  }

}
