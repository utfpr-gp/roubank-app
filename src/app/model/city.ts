import { State } from './state';

export class City {
  public id?: number;
  public imagePath?: string;

  constructor(public name?: string, public state?: State) {
    if (state == undefined) {
      this.state = new State({});
    }
  }

  // constructor(o: City = {} as City) {
  //   let {
  //     id = undefined,
  //     imagePath = undefined,
  //     state = new State()
  //   } = o;
  //
  //   this.id = id;
  //   this.imagePath = imagePath;
  //   this.state = state;
  // }

  public static clone(city: City) {
    let c: City = new City(city.name, new State(city.state));
    c.id = city.id;
    c.imagePath = city.imagePath;
    return c;
  }
}
