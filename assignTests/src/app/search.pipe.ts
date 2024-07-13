import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(userData: any, user: any) {
    if(!user){
      return userData;
    }
    else if(user){
      return userData.filter((ele: { title: string; })=>{
        return ele.title.toLowerCase().indexOf(user.toLowerCase()) !== -1;
      })
    }
    
  }

}
