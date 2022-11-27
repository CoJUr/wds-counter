//rfc
import React from 'react'
import Recipe from './Recipe'

export default function RecipeList({ recipes }) {
  return (
    <div className='recipe-list'>
      <div>
        {recipes.map(recipe => {

        return <Recipe 
        key={recipe.id} // unique id error problem solved
        {...recipe}
         /> 
        })}
      </div>
      <div className='recipe-list_add-recipe-btn-container' > 
        <button className='btn btn--primary' >Add Recipe</button>
      </div>
    </div>
  )
}
