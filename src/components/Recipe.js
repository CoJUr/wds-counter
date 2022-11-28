import React from 'react'
import IngredientList from './IngredientList'

export default function Recipe( props ) {
    // props.recipe.id    <= would have to do this if not doing spread operator impl

   const {
    name,
    cookTime,
    servings,
    instructions,
    ingredients
    } = props
  return (
    <div className='recipe'>
        <div className='recipe__header' >
            <h3 className='recipe__title'>{name}</h3>
            <div>
                <button className='btn btn--primary mr-1'>Edit</button>
                <button className='btn btn--danger'>Delete</button>
            </div>
        </div>
        <div className='recipe__row'>
            <span className='recipe__label'>Cook Time:</span>
            <span className='recipe__value'>{ cookTime }</span>
        </div>
        <div className='recipe__row'>
            <spa className='recipe__label'n>Servings:</spa>
            <span className='recipe__value'> {servings} </span>
        </div>
        <div className='recipe__row'>
            <span className='recipe__labe recipe__instructions recipe__label--indented'>Instructions:</span>
            <div className='recipe__value recipe__instructions recipe__value--indented'>{instructions}</div>
        </div>
        <div className='recipe__row'>
            <span className='recipe__label'>Ingredients:</span>
            <div className='recipe__value recipe__value--indented'>
                <IngredientList 
                //get and render ingredients from here in Recipe
                ingredients={ ingredients } />
            </div>
        </div>
    </div>

  )
}
