import { Observable } from 'rxjs';
import { CategoriesService } from './../../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit {

  category$: any ={} 

constructor(private cs: CategoriesService){}

  ngOnInit(): void {

    this.cs.loadData().subscribe(val => {

      this.category$ = val;

      console.log(this.category$)


    })

  }

}
