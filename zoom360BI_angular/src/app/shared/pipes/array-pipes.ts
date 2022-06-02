import { Injectable, Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort"
})
@Injectable({
  providedIn: 'root'
})
export class ArraySortPipe implements PipeTransform {
  transform(array: any, field: string): any[] {
    if (!Array.isArray(array)) {
      return;
    }
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
  transform2(array: any, field: string): any[] {
    if (!Array.isArray(array)) {
      return;
    }
    array.sort((a: any, b: any) => {
      if (b[field] < a[field]) {
        return -1;
      } else if (b[field] > a[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}

