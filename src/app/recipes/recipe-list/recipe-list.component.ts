import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'Test 1', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'),
    new Recipe('Test Recipe 2', 'Test 2', 'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_610/hellofresh_s3/image/5dcc139c96d0db43857c2eb3-a12c2ae7.jpg'),
    new Recipe('Test Recipe 3', 'Test 3', 'https://www.whiskaffair.com/wp-content/uploads/2016/02/Achari-Paneer-Tikka-1.jpg')
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
     this.recipeWasSelected.emit(recipe);
  }

}
