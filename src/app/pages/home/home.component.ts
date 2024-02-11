import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private ps: PostsService){

this.ps.loadData().subscribe(val =>{

  console.log(val)
})

  }


  ngOnInit(): void {
   
  }

}
