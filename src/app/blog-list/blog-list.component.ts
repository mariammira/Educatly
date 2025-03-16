import { Component, OnInit } from '@angular/core';
import { BlogService} from './../blog.service' 

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  public blogs:any[]=[];
  public loading=true;

  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.blogService.getArticles().subscribe((blogs)=>{
      this.blogs=blogs;
      this.loading=false;
    },
  (e)=>{
    this.loading=false;
    console.log(e);
  })
  }

}
