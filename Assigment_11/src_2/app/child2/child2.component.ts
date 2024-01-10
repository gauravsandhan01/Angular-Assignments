import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';
@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  providers : [StringService]
})
export class Child2Component implements OnInit{
  public count :number = 0;

  constructor(private obj : StringService){}
  public str : string = 'Hello WORLD'
  ngOnInit(): void 
  {
    this.count = this.obj.CountCapital(this.str) 
  }
}
