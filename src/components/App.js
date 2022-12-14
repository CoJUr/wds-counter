import React, {useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import '../css/app.css'
import { v4 as uuidv4 } from 'uuid'
import RecipeEdit from "./RecipeEdit";


//set up context and then set up the value we will pass into the context (all the handler functions)
export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookinWithReact.recipes'

function App() {
  //state for selected recipes, select by id to get it from the list but by default select nothing
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const [recipes, setRecipes] = useState(sampleRecipes)
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId) //compare each recipe id to the selected recipe. ret undefined if no selected recipe
  //now want to pass the selected recipe into the edit section on right side by passing it down to recipeEdit



  //this useEffect hook loads/gets the values from local storage so the recipes can 'stick' between refreshes
  useState(() => {
    //load recipes in everytime app is rendered (once)
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY) // will return nothing if no recipes
    
    if (recipeJSON == null) /* if not null, we do have information in local storage.*/ {
      return sampleRecipes
    } else {
      return JSON.parse(recipeJSON)
    }

      // setRecipes(JSON.parse(recipeJSON)) 
      //converts JSON str -> JSON arr and puts it in state, + re-rendering comp
  })

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes)) 
    //Persisting - local storage only supports strings so convert JS array to str
  }, [recipes])

  const recipeContextValue = {
    // handleRecipeAdd: handleRecipeAdd,
    // handleRecipeDelete: handleRecipeDelete
    //key and value have the same name, so can just say it once because JS
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id)
  }

  function handleRecipeAdd() {
    
    //creating a default recipe
    const newRecipe = {
      // could do something like id: Date.now().toString()     using uuid instead for unqique identifiers 
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        { id: uuidv4(), name: '', amount: ''}
      ]
    }

    //set selected recipe to be newRecipe when clicking handleRecipeAdd(Add Recipe btn) so editing interface displays automatically
    setSelectedRecipeId(newRecipe.id)
  
    //after creating a recipe can now use setRecipes to add the newRecipe to recipes
    setRecipes([...recipes, newRecipe])
  }

  //function to allow changing recipes array to update a recipe. 2 args: 1st is id of recipe to be changed, 2nd is new recipe
  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes] //copying recipe array. next, get index assoc. with passed id
    const index = newRecipes.findIndex(r => r.id === id) 
    newRecipes[index] = recipe 
    //changed recipe is now updated in the recipes array
    setRecipes(newRecipes)
    //now add to context so can call this in the inputs
  }

  function handleRecipeDelete(id) {
    //check to see if have selected recipe id (clearing selected recipe id after deletion bug)
    if (selectedRecipeId != null && selectedRecipeId === id) {
      //if here, deleting the currently selected recipe. so reset selectedRecipeId to null
      setSelectedRecipeId(undefined)
    }
    //filter out current list of recipes; get all that DONT have the passed in id, and reset list to the omitted list
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    //wrap the code in the context - allows no need for prop drilling handler functions to RecipeList once referenced in Context
    <RecipeContext.Provider value={recipeContextValue}> 
      <RecipeList recipes={recipes}/>

      {/*todo: make edit section hidden by default until have selected a recipe to edit */}
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
    
  )
  
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
