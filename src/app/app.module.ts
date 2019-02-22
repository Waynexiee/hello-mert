import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { PostComponent } from "./post/post.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
const appRoutes: Routes = [
  {
    path: "posts",
    component: PostComponent,
    data: { title: "Post List" }
  },
  { path: "", redirectTo: "/posts", pathMatch: "full" }
];
@NgModule({
  declarations: [AppComponent, PostComponent],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
