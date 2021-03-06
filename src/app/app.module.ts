import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { FormsModule } from '@angular/forms';
import { OddComponent } from './odd/odd.component';
import { BasicHighlightDirective } from './directive/basic-highlight.directive';
import { BetterHighlightDirective } from './directive/better-highlight.directive';
import { UnlessDirective } from './directive/unless.directive';
import { DropdownDirective } from './directive/dropdown.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CockpitComponent,
    OddComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    AccountComponent,
    NewAccountComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
