import { Injectable } from '@angular/core';

import { UserApi } from '../../../sdk/services/custom/User';
import { UserInterface } from '../../../sdk/models/User';

@Injectable()

export class LoginService {
  
  constructor (
    private userApi: UserApi,
    private userInterface: UserInterface
  ) {

  }

  login (cridential: any) {
      return this.userApi.login(cridential);
  }

  logout() {
    return this.userApi.logout();
  }


}
