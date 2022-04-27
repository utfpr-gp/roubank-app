import * as M from 'materialize-css';

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit, AfterViewInit {
  @ViewChild('mobile') sideNav?: ElementRef;

  public inputElement?: HTMLElement;
  protected name: string;
  private counter!: number;
  sugerido: boolean = true;

  constructor() {
    this.name = 'Roni';
    console.log(this.sugerido?.valueOf());
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);
  }
}
