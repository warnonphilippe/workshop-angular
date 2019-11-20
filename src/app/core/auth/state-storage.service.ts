import { Injectable } from '@angular/core';
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';

@Injectable({ providedIn: 'root' })
export class StateStorageService {

  currentRealKey = 'civadis_current_realm';

  constructor(private $sessionStorage: SessionStorageService, private $localStorage: LocalStorageService) {}

  getPreviousState() {
    return this.$sessionStorage.retrieve('previousState');
  }

  resetPreviousState() {
    this.$sessionStorage.clear('previousState');
  }

  storePreviousState(previousStateName, previousStateParams) {
    const previousState = { name: previousStateName, params: previousStateParams };
    this.$sessionStorage.store('previousState', previousState);
  }

  getDestinationState() {
    return this.$sessionStorage.retrieve('destinationState');
  }

  storeUrl(url: string) {
    this.$sessionStorage.store('previousUrl', url);
  }

  getUrl() {
    return this.$sessionStorage.retrieve('previousUrl');
  }

  storeDestinationState(destinationState, destinationStateParams, fromState) {
    const destinationInfo = {
      destination: {
        name: destinationState.name,
        data: destinationState.data
      },
      params: destinationStateParams,
      from: {
        name: fromState.name
      }
    };
    this.$sessionStorage.store('destinationState', destinationInfo);
  }

  storeRealm(realm: string) {
    this.$localStorage.store(this.currentRealKey, realm);
  }

  getRealm(): string {
    return this.$localStorage.retrieve(this.currentRealKey);
  }

  clearRealm() {
    this.$localStorage.clear(this.currentRealKey);
  }

}
