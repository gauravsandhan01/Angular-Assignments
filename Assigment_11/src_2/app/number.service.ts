import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService 
{
  ChkPrime(number: number): boolean 
  {
    if (number <= 1) 
    {
      return false;
    }
    for (let i = 2; i * i <= number; i++) 
    {
      if (number % i === 0) 
      {
        return false;
      }
    }
    return true;
  }
}
