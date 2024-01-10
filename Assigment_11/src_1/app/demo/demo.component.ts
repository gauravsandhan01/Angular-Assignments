import { Component } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers : [ArithmaticService]
})
export class DemoComponent 
{
  public Ans1 : number = 0;
  public Ans2 : number = 0;

  constructor(private obj : ArithmaticService)
  {
    this.Ans1 = obj.Add(20,30);
    this.Ans2 = obj.Sub(50,20);
  }

}
