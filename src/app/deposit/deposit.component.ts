import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { BalancePanelComponent } from '../shared/balance-panel/balance-panel.component';
import { Constants } from './../util/constants';
import { DepositService } from './deposit.service';
import { Shared } from './../util/shared';
import { Transaction } from './../model/transaction';
import { User } from './../model/user';
import { UserPromiseService } from './../services/user-promise.service';
import { WebStorageUtil } from './../util/web-storage-util';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css'],
})
export class DepositComponent implements OnInit, AfterViewInit {
  value: number = 0;
  depositInvalid = false;
  depositMessage = '';
  user!: User;

  @ViewChild(BalancePanelComponent)
  balancePanelComponent!: BalancePanelComponent;

  modal = {
    show: false,
    title: '',
    text: '',
  };

  constructor(
    private depositService: DepositService,
    private userPromiseService: UserPromiseService
  ) {}

  ngOnInit(): void {
    this.depositMessage = '';
    Shared.initializeWebStorage();
    this.user = WebStorageUtil.get(Constants.USERNAME_KEY);
    this.userPromiseService
      .getByUsername(Constants.USERNAME_KEY)
      .then((u: User[]) => {
        this.user = u[0];
        localStorage.setItem(
          Constants.USERNAME_KEY,
          JSON.stringify(User.toWS(this.user))
        );
      })
      .catch((e) => {
        //erro ao pegar do json-server
        this.user = WebStorageUtil.get(Constants.USERNAME_KEY);
      });
  }

  ngAfterViewInit(): void {
    //demonstração de acesso de um atributo de componente filho por referência
    console.log(`O seu saldo é ${this.balancePanelComponent.value}`);
  }

  onSubmit() {
    this.depositService
      .do(this.value, this.user.username)
      .then((value) => {
        this.depositInvalid = false;
        this.user = WebStorageUtil.get(Constants.USERNAME_KEY);
        this.depositMessage = `Depósito de R$ ${value.toFixed(
          2
        )} efetuado com sucesso considerando a pequena taxa
      de ${Constants.TAX_DEPOSIT * 100}% e os pequenos custos acumulados
      de visualização de saldo e extrato!`;
      })
      .catch((e) => {
        this.depositInvalid = true;
        this.depositMessage = e;
      })
      .finally(() => {
        this.value = 0;
      });
  }

  onResetClick() {
    this.value = 0;
  }

  onDonationEvent(event: boolean) {
    this.modal.show = event;
    this.modal.title = 'Aviso!';
    this.modal.text = `Você já tem muito dinheiro, já pensou em doar um pouco?
    Venha conhecer a nossa seção de doação e doe com o coração!`;
  }

  onCloseModal() {
    this.modal.show = false;
  }
}
