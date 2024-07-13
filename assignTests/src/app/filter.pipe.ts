import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(useractive: any, ...args: any) {
    if(useractive){
      console.log("Hi this pipe example")
      return useractive.filter((ele:any)=>ele.completed==false);
      
    }
    
  }
  

}
