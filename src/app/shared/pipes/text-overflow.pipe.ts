import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'textOverflow'
})
export class TextOverflowPipe implements PipeTransform {
  transform(value: string, limit: number = 100): string {
    if (value.length <= limit) {
      return value;
    }
    return value.slice(0, limit) + '...';
  }
}
