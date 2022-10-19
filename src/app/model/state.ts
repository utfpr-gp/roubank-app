export class State {
  public id?: number;
  public name?: string;
  public abbreviation?: string;

  /**
   *  Construtor genérico
   *  TypeScript não permite múltiplos construtores
   *  Passa os argumentos em objeto
   *  Inicializa as variáveis locais com o  objeto, mas apenas os existentes, os outros ficam default
   *  Serve como clone também
   **/
  constructor(o: State = {} as State) {
    let { id = undefined, name = undefined, abbreviation = undefined } = o;

    this.id = id;
    this.name = name;
    this.abbreviation = abbreviation;
  }
}
