import React from 'react'
import Ingredient from './Ingredient'

export default function IngredientList( {ingredients} ) {
    //todo: loop through all ingredients, from outside JSX method (opposed to RecipeList way which used inside jsx method)
    const ingredientElements= ingredients.map(ingredient => { 
        //return an ingredient for each ingredient
        return <Ingredient key={ingredient.id} {...ingredient} />
    })

  return (
    <div className='ingredient-grid'>
        {ingredientElements} 
        {/* rendering each ingredient element from map */}
    </div>
  )
}
