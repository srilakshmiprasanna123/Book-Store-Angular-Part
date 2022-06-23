import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books:any;
  totalBooks: number = 10;
  search:Array<any> = [];
  sort!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
