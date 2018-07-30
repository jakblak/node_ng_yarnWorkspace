import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  posts: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPosts()
        .subscribe(
          posts => this.posts = posts
        );
  }

}
