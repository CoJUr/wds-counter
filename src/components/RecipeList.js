//rfc
import React from 'react'
import Recipe from './Recipe'

export default function RecipeList( props ) {
  //refactor to use props instead of passing in handlers directly via destructure:
  const {
    recipes,
    handleRecipeAdd,
    handleRecipeDelete
  } = props

  return (
    <div className='recipe-list'>
      <div>
        {recipes.map(recipe => {

        return (
        <Recipe 
        key={recipe.id} // unique id error problem solved
        handleRecipeDelete={handleRecipeDelete}
        {...recipe}
         /> 
        )
        })}
      </div>
      <div className='recipe-list_add-recipe-btn-container' > 
        <button 
          className='btn btn--primary'
          onClick={handleRecipeAdd}
        >
          Add Recipe
        </button>
      </div>
    </div>
  )
}
