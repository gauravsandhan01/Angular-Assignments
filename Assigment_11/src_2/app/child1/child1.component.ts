import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  providers : [NumberService]
})
export class Child1Component implements OnInit 
{
  isPrime: boolean = false;

  constructor(private obj: NumberService) {}
  public num : number = 17
  ngOnInit() 
  {
    this.isPrime = this.obj.ChkPrime(this.num);
  }
}