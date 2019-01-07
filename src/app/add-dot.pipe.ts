import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addDot'
})
export class AddDotPipe implements PipeTransform {

  transform(value: any, end: any): any {
  	let output = value+'....'; 
    return output;
  }

}
