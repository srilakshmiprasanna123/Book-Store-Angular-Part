import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/book.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  book:any;
  totalBooks: number = 10;
  search:Array<any> = [];
  sort!:string;
  bookName: any

  constructor(private router:Router,private bookService: BookService,private route:ActivatedRoute,private service:BookService) { }

  ngOnInit(): void {
    this.service.getAllBooks().subscribe((data:any)=>{
      console.log("Book Data retrieved successfully",data);
      this.book=data.data;
      this.totalBooks=this.book.length;
    });
 }

  sortBy() {
    if (this.sort == "Ascending") {
      this.bookService.sortByAscending().subscribe((getData:any) => {
        this.book = getData.data;
      });
        console.log("Low to High Price")

    } if (this.sort == "Descending") {
      this.bookService.sortByDescending().subscribe((getData:any) => {
        this.book = getData.data;
      });
      console.log("High to Low Price")

    } if (this.sort == "Relevance") {
      this.ngOnInit();
    }
 }

 searchByBookName() {
    if (this.bookName == "") {
      this.ngOnInit();
      console.log("Search Completed!!!")
    } else 
      this.bookService.searchBookByBookName(this.bookName).subscribe((getData:any) => {
      this.book=getData.data;
      });
      console.log("Book Found!!!");
  }
}