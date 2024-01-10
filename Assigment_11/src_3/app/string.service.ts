import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService 
{

  CountCapital(text: string): number 
  {
   return text.split('').filter(char => char === char.toUpperCase() && char !== ' ').length;
  }
}
