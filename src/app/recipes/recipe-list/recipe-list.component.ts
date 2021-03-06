import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("test", "This is test Recipe", "https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg"),
    new Recipe("test1", "This is test2 Recipe", "https://www.nps.gov/subjects/camping/images/recipe_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false"),
    new Recipe("test2", "This is test3 Recipe", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBTfd7uJgwgGLtcoel7SfngmrkWLi4fNiG7Yp7GVw_N4v5Ujni")
  ];
  @Output() transferRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() { 
    // let recipeItem: Recipe = new Recipe("test", "This is test Recipe", "https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg");
    // this.recipes[0] = recipeItem;

  }

  ngOnInit() {
  }

  onItem(item: Recipe) {
    this.transferRecipe.emit(item);
  }

}
