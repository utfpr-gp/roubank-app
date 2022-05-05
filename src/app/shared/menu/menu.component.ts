import * as M from 'materialize-css';

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import { Constants } from 'src/app/util/constants';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit, AfterViewInit {
  loggedIn = false;
  donationLink = '/doacao';
  @ViewChild('mobile') sideNav?: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.loggedIn = WebStorageUtil.get(Constants.LOGGED_IN_KEY) as boolean;
  }

  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);
  }
}
