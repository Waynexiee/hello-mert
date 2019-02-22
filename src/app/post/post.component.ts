import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";

@Component({
  selector: "app-product",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  posts: any = [];

  constructor(public rest: RestService) {}

  ngOnInit() {
    this.getposts();
  }

  getposts() {
    this.posts = [];
    this.rest.getPosts().subscribe((data: {}) => {
      this.posts = data;
    });
  }
}
