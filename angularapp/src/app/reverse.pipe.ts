import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rev'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): any {
    let arr=[]
    for(let i=value.length;i>=0;i--){
        arr.push(value[i])
  }
  return arr.join('')
  }
}
