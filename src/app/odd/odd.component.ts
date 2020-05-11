import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  
  onlyOdd = false;
  numbers = [1,2,3,4,5,6,7,8];

  oddNumbers = [1,3,5,7];

  evenNumbers = [2,4,6,8];

  constructor() { }

  ngOnInit(): void {
  }
  value = 100;
}
