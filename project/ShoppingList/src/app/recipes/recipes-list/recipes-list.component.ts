import { Component, OnInit } from '@angular/core';

import { Recipes } from '../recipes.model'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipes[] = [
    new Recipes('A Test Recipe', 'This is simply a test', 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwi8kN7X9fLiAhWLuY8KHaKSA1EQjRx6BAgBEAU&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Findian%2520food%2F&psig=AOvVaw0DkcQ37AhT6qkXaszVk3Jp&ust=1560943417313749')
  ];

  constructor() { }

  ngOnInit() {
  }

}
