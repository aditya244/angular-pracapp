import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): any {
    let currYear = new Date().getFullYear();
    let dobYear = new Date(value).getFullYear();
    let userAge = currYear - dobYear
    return userAge;
  }

}
