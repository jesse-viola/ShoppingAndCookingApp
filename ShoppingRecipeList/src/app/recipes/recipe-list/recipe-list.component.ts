import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Apple Pie', 'It is a pie with apples and sugar', 'https://norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_010.jpg'),
    new Recipe('Pizza', 'New York Style', 'https://norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_010.jpg'),
    new Recipe('Test Recipe', 'Test Description', 'https://norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_010.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
