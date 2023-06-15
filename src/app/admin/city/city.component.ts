import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import { City } from './../../model/city';
import { CityService } from './city.service';
import { NgForm } from '@angular/forms';
import { State } from './../../model/state';
import { StateService } from './state.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  providers: [CityService, StateService],
})
export class CityComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form!: NgForm;
  @ViewChild('stateSelect') stateSelect!: ElementRef;

  city: City;
  cities: City[];
  states: State[];

  isLoadData = false;

  isSubmitted: boolean = false;
  message: string = '';
  isShowMessage = false;
  isSuccess = false;

  constructor(private service: StateService, private cityService: CityService) {
    this.city = new City();
    this.cities = [];
    this.states = [];
  }

  ngOnInit() {
    this.listStates();
    this.listCities();
  }

  ngAfterViewInit(): void {}

  onReset() {
    this.city = new City();
  }

  onSubmit() {
    this.isSubmitted = true;

    this.cityService.saveOrUpdate(this.city).subscribe(
      (data) => {
        this.isShowMessage = true;
        this.isSuccess = true;
        this.message = 'Cadastro realizado com sucesso!';
        this.form.reset();
        this.city = new City();
        this.listCities();
      },
      (error) => {
        alert('Houve um erro!');
      }
    );
  }

  onEdit(city: City) {
    let cloneCity: City = City.clone(city);
    this.city = cloneCity;

    //atualiza o select para apresentar o elemento selecionado
    setTimeout(() => {
      M.FormSelect.init(this.stateSelect.nativeElement);
    }, 100);
  }

  onDelete(id: number) {
    alert('Ainda não está implementado!');
  }

  /**
   * Retorna a lista de State para apresentar no select
   */
  listStates() {
    this.service.listStates().subscribe(
      (states) => {
        this.states = states;
        this.isLoadData = true;

        setTimeout(() => {
          M.FormSelect.init(this.stateSelect.nativeElement);
        }, 100);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  listCities() {
    this.cityService.listCities().subscribe(
      (cities) => {
        this.cities = cities;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /**
   * Função usada com o select para comparar dois objetos State.
   * @param s1
   * @param s2
   * @returns
   */
  compareStates(s1: State, s2: State) {
    if (s1 != null && s2 != null) {
      return s1.id == s2.id;
    }
    return false;
  }
}
