import { Component, OnInit, ViewChild } from '@angular/core';

import { Constants } from 'src/app/util/constants';
import { NgForm } from '@angular/forms';
import { Shared } from '../util/shared';
import { User } from './../model/user';
import { UserService } from './user.service';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  user!: User;
  users?: User[];

  userRepassword: string = '';

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.user = new User('', '');
    this.users = this.userService.getUsers();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.userService.isExist(this.user.username)) {
      this.userService.save(this.user);
    } else {
      this.userService.update(this.user);
    }
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';

    this.form.reset();
    this.user = new User('', '');

    this.users = this.userService.getUsers();
  }

  /**
   * Realiza o clone do objeto, justamente para não refletir as mudanças
   * imediatamente na lista de usuários cadastrados sem pressionar o submit.
   * @param user
   */
  onEdit(user: User) {
    //this.user = user;
    let clone = User.clone(user);
    this.user = clone;
  }

  onDelete(username: string) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover ' + username
    );
    if (!confirmation) {
      return;
    }
    let response: boolean = this.userService.delete(username);
    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      this.message = 'O item foi removido com sucesso!';
    } else {
      this.message = 'Opps! O item não pode ser removido!';
    }
    this.users = this.userService.getUsers();
  }
}
