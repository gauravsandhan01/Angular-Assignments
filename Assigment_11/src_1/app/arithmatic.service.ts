import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {

  constructor() { }

  Add(a : number, b : number) : number
  {
    return a + b;
  }

  Sub(a : number, b : number) : number
  {
    return a - b;
  }
}
