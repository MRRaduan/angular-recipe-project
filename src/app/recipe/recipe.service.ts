import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShopppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
     new Recipe(
      'Tasty Schnitzel',
      'S super-tasty Schnitzel - just awesome!',
      'https://via.placeholder.com/350',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),

     new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://via.placeholder.com/320',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ]
    )
  ];

  constructor(private shoppingListService: ShopppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
