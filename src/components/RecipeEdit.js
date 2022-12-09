import React from 'react'

export default function RecipeEdit() {
  return (
    <div className='recipe-edit'>
        <div>
            <button>&times;</button>
        </div>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' id='name' />
            <label htmlFor="cookTime">Cook Time</label>
            <input type="text" name='cookTime' id='cookTime' />
            <label htmlFor="servings">Servings</label>
            <input type="number" min='1' name='servings' id='servings' />
            <label htmlFor="instructions">Instructions</label>
            <textarea name="instructions" id="instructions" ></textarea>
        </div>
    </div>
  )
}
