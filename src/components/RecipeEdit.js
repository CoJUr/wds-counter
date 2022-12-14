import React, { useContext } from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { RecipeContext } from './App'
import { v4 as uuidv4 } from 'uuid'


export default function RecipeEdit({ recipe }) {
    const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext)

    //helper func to handle all shared functionality between inputs. 'changes' === an obj with all the differences between current recipe
    function handleChange(changes) {
        handleRecipeChange(recipe.id, { ...recipe, ...changes}) 
        //overwriting anything in 'changes' and adding it to everything in recipe (e.g. name from 'recipe' -> name from 'changes')
        //passing new recipe up to handleRecipeChange. recipe.id being the recipe we want to replace when creating the new obj for state in the inputs. 
    }

    function handleIngredientChange(id, ingredient) {
    const newIngredients = [...recipe.ingredients] //duplicating current array again
    const index = newIngredients.findIndex(i => i.id === id) //finding ingredient with id
    newIngredients[index] = ingredient  //passed in ingredient goes into the appropriate index
    handleChange( { ingredients: newIngredients }) //setting state
    }

    //handle adding/creating ingredients
    function handleIngredientAdd() {
        const newIngredient = {
            id: uuidv4(),
            name: '',
            amount: ''
            //now got the ingredient, time to call handleChange() to propogate up to the recipe
        }
        handleChange({ ingredients: [...recipe.ingredients, newIngredient]})
    }

    function handleIngredientDelete(id) {
        handleChange({
            ingredients: recipe.ingredients.filter(i => i.id !== id) 
            //setting state of ingredients list to be without the one want to remove
        })
    }
    
  return (
    <div className='recipe-edit'>
        <div className='recipe-edit__remove-button-container'>
            <button
             className='btn recipe-edit__remove-button'
            onClick={() => handleRecipeSelect(undefined)} //setting selectedRecipeId to undefined which 'closes'/hides the edit UI
            >
             &times;
            </button>
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
                onChange={e => handleChange({ name: e.target.value })} // whatever is typed in gets passed as new name for component
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
                onChange={e => handleChange({ cookTime: e.target.value })}
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
                onChange={e => handleChange({ servings: parseInt(e.target.value) || '' })} //logical OR operator prevents displaying NaN if field blank
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
             onChange={e => handleChange({ instructions: e.target.value })}
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
                 //passing down handleChange = {handleChange} could work but want handle ingredient change and delete separately 
                 handleIngredientChange={handleIngredientChange}
                 handleIngredientDelete={handleIngredientDelete}
                 ingredient={ingredient} 
                />
            ))}
            {/* <RecipeIngredientEdit />
            <RecipeIngredientEdit /> */}

        </div>
        <div className='recipe-edit__add-ingredient-btn-container'>
            <button
             className='btn btn--primary'
             onClick={() => handleIngredientAdd()}
            >
             Add Ingredient
            </button>
        </div>
    </div>
  )
}
