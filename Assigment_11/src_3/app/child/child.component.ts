import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers : [NumberService, StringService]
})
export class ChildComponent implements OnInit
{
  isPrime: boolean = false;

  constructor(private obj: NumberService, private obj1 : StringService) {}
  public num : number = 17
  public count : number = 0;
  public str : string = 'Hello WORLD'
  ngOnInit() 
  {
    this.isPrime = this.obj.ChkPrime(this.num);
    this.count = this.obj1.CountCapital(this.str)
  }
}
