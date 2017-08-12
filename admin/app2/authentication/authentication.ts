import { UserApi  } from '../../../sdk/services/custom/User';

export class Authentication {

  constructor(
    private userApi: UserApi
  ) {

  }

  isAuthenticated() {
    return this.userApi.isAuthenticated();
  }
  
  getCurrentId() {
    return this.userApi.getCurrentId();
  }

  getLoggedUser() {
    return this.userApi.getCurrent();
  }

  getLoggenToken() {
    return this.userApi.getCurrentToken();
  }

  
}
