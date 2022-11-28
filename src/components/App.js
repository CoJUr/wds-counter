import React, {useState} from "react";
import RecipeList from "./RecipeList";
import '../css/app.css'
import { v4 as uuidv4 } from 'uuid'

function App() {
  //want recipe state here in App for functionality of editing recipes themselves. both RecipeList and edit functionality need access to recipes 
  // set recipe state to be sampleRecipes the first time calling useState
  const [recipes, setRecipes] = useState(sampleRecipes)
  return (
    <RecipeList recipes={recipes}/>
  )
  function handleRecipeAdd() {
    const newRecipe = {
      // could do something like id: Date.now().toString()     using uuid instead for unqique identifiers 
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        { id: uuidv4(), name: 'Name', amount: '1 Tbs'}
      ]
    }
  
    //now use setRecipes to add the newRecipe to recipes
    setRecipes([...recipes, newRecipe])
  
  }
}


//add an arr of sample recipes to make dynamic
const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on chicken \n2. Put chicken in oven \n3. Eat chicken", //now add ingredients 
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      },
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: "1. Put paprika on pork \n2. Put pork in oven \n3. Eat pork",
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs'
      },
    ]
  }
]

export default App;
