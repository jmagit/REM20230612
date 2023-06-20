import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toComaDecimal',
    standalone: true
})
export class ToComaDecimalPipe implements PipeTransform {
  transform(value: number | string): string {
    if (typeof (value) === 'number') {
      value = value.toString();
    }
    if (typeof (value) === 'string') {
      return value.replace(/\./g, ',');
    }
    return value;
  }
}

export const PIPES_NUMERICOS = [ ToComaDecimalPipe, ]
