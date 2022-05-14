import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { User } from './../model/user';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users!: User[];
  constructor() {
    this.users = WebStorageUtil.get(Constants.USERS_KEY);
  }

  save(user: User) {
    this.users = WebStorageUtil.get(Constants.USERS_KEY);
    this.users.push(user);
    WebStorageUtil.set(Constants.USERS_KEY, this.users);
  }

  update(user: User) {
    this.users = WebStorageUtil.get(Constants.USERS_KEY);
    this.delete(user.username);
    this.save(user);
  }

  delete(username: string): boolean {
    this.users = WebStorageUtil.get(Constants.USERS_KEY);
    this.users = this.users.filter((u) => {
      return u.username?.valueOf() != username?.valueOf();
    });

    WebStorageUtil.set(Constants.USERS_KEY, this.users);
    return true;
  }

  isExist(value: string): boolean {
    this.users = WebStorageUtil.get(Constants.USERS_KEY);
    for (let u of this.users) {
      if (u.username?.valueOf() == value?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  getUsers(): User[] {
    this.users = WebStorageUtil.get(Constants.USERS_KEY);
    return this.users;
  }
}
