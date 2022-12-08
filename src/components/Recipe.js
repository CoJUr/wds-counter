import React, { useContext, useEffect } from 'react'
import IngredientList from './IngredientList'
import { RecipeContext } from './App'

export default function Recipe( props ) {
    const { handleRecipeDelete } = useContext(RecipeContext) //now can delete handleRecipeDelete from props

   const {
    id, //using id for handleDelete
    name,
    cookTime,
    servings,
    instructions,
    ingredients,
    } = props

    useEffect(() => {
        console.log('Rendered')
        //now return the function that will call as soon as component unmounts
        return () => {
            console.log('Unmount')
        }
    }, []) //pass empty arr 2nd arg to ensure only runs on 1st render
  return (
    <div className='recipe'>
        <div className='recipe__header' >
            <h3 className='recipe__title'>{name}</h3>
            <div>
                <button className='btn btn--primary mr-1'>Edit</button>
                <button
                className='btn btn--danger'
                onClick={() => handleRecipeDelete(id)}
                >
                Delete
                </button>
            </div>
        </div>
        <div className='recipe__row'>
            <span className='recipe__label'>Cook Time:</span>
            <span className='recipe__value'>{ cookTime }</span>
        </div>
        <div className='recipe__row'>
            <span className='recipe__label'>Servings:</span>
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
