//rfc
import React from 'react'
import Recipe from './Recipe'

export default function RecipeList({ recipes }) {
  return (
    <div>

   {recipes.map(recipe => {
    {/* <Recipe id={recipes.id} name={recipes.name} ></Recipe>   instead: => spread operator */}
    return<Recipe {...recipe} /> // props lets pass down all properties as top levels of prop rather than being nested in the recipe
   })}
    </div>
  )
}
