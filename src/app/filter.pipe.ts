import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

   transform(value: any, sName: string): any {
    if(sName === ""){
      return value;
    }
    else{
      console.log(value);
      console.log(sName);
    const playersArray:any[]=[];
    
    for (let i=0;i< value.length;i++){
      let employeeNames:string=value[i].name;
      if(employeeNames.startsWith(sName)){
      playersArray.push(value[i]);
      }
    
    }
    return playersArray;
  }
  }
  // transform(items: any, filters: any, defaultFilter: boolean): any {
  //   if (!filters){
  //     return items;
  //   }

  //   if (!Array.isArray(items)){
  //     console.log(items);
  //     return items;
  //   }

  //   if (filters && Array.isArray(items)) {
  //     let filterKeys = Object.keys(filters);

  //     if (defaultFilter) {
  //       return items.filter(item =>
  //           filterKeys.reduce((x, keyName) =>
  //               (x && new RegExp(filters[keyName], 'gi').test(item[keyName])) || filters[keyName] == "", true));
  //     }
  //     else {
  //       return items.filter(item => {
  //         return filterKeys.some((keyName) => {
  //           return new RegExp(filters[keyName], 'gi').test(item[keyName]) || filters[keyName] == "";
  //         });
  //       });
  //     }
  //   }
  // }
}
