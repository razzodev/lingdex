import { action, observable, makeObservable, computed } from 'mobx'
import { AppStore } from './AppStore'
export class AuthStore {
    isAuthenticated;
    user = 'no user';
    appStore
    constructor(appStore) {
        makeObservable(this, {
            isAuthenticated: observable,
            user: observable,
            setUser: action,
            setAuth: action,
            getUser: computed
        })
        this.appStore = appStore
    }
    setUser(payload) {
        this.user = payload;
    };
    get getUser() {
        return this.user;
    };
    setAuth(bool) {
        this.isAuthenticated = bool;
    }


}