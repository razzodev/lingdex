import { action, observable, makeObservable, computed } from 'mobx'
import { AuthStore } from './AuthStore';
import { ContentStore } from './ContentStore';
export class AppStore {

    authStore;
    contentStore;
    constructor() {
        this.authStore = new AuthStore(this);
        this.contentStore = new ContentStore(this)
    }

}