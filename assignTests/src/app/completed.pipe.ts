import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completed'
})
export class CompletedPipe implements PipeTransform {

  transform(usercompleted: any, ...args: unknown[]) {    
    if(usercompleted){
      console.log("Hi this pipe example")
      return usercompleted.filter((ele:any)=>ele.completed==true);
      
    }
  }

}
