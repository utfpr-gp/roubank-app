import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf',
})
export class CpfPipe implements PipeTransform {
  public transform(cpf: string): string {
    if (!cpf || cpf.trim() === '') {
      return '';
    }
    let formatted: string;
    formatted = cpf.substring(0, 3) + '.';
    formatted = formatted + cpf.substring(3, 6) + '.';
    formatted = formatted + cpf.substring(6, 9) + '-';
    formatted = formatted + cpf.substring(9, 11);
    return formatted;
  }
}
