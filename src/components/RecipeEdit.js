import React, { useContext } from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { RecipeContext } from './App'

export default function RecipeEdit({ recipe }) {
    const { handleRecipeChange } = useContext(RecipeContext)

    //helper func to handle all shared functionality between inputs
    function handleChange(changes) {
        //'changes' === an obj with all the differences between current recipe
    }
  return (
    <div className='recipe-edit'>
        <div className='recipe-edit__remove-button-container'>
            <button className='btn recipe-edit__remove-button'>&times;</button>
        </div>
        <div className='recipe-edit__details-grid'>
            <label 
                htmlFor="name" 
                className='recipe-edit__label'>
                Name
            </label>
            <input 
                type="text" 
                name='name' 
                id='name' 
                className='recipe-edit__input'
                value={recipe.name}
            />
            <label
             htmlFor="cookTime"
             className='recipe-edit__label'>
             Cook Time
            </label>
            <input 
                type="text" 
                name='cookTime' 
                id='cookTime' 
                className='recipe-edit__input'
                value={recipe.cookTime}
            />
            <label
             htmlFor="servings"
             className='recipe-edit__label'>
             Servings
            </label>
            <input 
                type="number" 
                min='1'
                name='servings' 
                id='servings' 
                className='recipe-edit__input'
                value={recipe.servings}
            />
            <label
             htmlFor="instructions"
             className='recipe-edit__label'>
             Instructions
            </label>
            <textarea
             name="instructions" 
             className='recipe-edit__input'
             id="instructions" 
             value={recipe.instructions}
            >
             </textarea>
        </div>
        <br />
        <label className='recipe-edit__label'>Ingredients
        </label>
        <div className='recipe-edit__ingredient-grid'>
            <div>Name</div>
            <div>Amount</div>
            <div></div>
            {/* replace hardcode placeholders with dynamic rendering of RecipeIngredientEdit */}
            {recipe.ingredients.map(ingredient => (
                <RecipeIngredientEdit 
                 key={ ingredient.id} 
                 ingredient={ingredient} 
                />
            ))}
            {/* <RecipeIngredientEdit />
            <RecipeIngredientEdit /> */}

        </div>
        <div className='recipe-edit__add-ingredient-btn-container'>
            <button className='btn btn--primary'>Add Ingredient</button>
        </div>
    </div>
  )
}
