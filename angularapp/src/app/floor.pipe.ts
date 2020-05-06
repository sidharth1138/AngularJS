import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flr'
})
export class FloorPipe implements PipeTransform {

  transform(value: number): number{
    return Math.floor(value);
  }

}
