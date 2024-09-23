import React from 'react';
import { useParams } from 'react-router-dom';
import outputData from './output.json'; // Adjust the path as needed

const JsonRecipeDetails = () => {
  const { id } = useParams();
  const recipe = outputData[id];

  return (
    <div>
      {recipe ? (
        <>
          <h1>{recipe.recipe}</h1>
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredient.map((ing, index) => <li key={index}>{ing}</li>)}
          </ul>
          <h2>Cooking Method</h2>
          <p>{recipe.cooking_method}</p>
        </>
      ) : (
        <p>Recipe not found!</p>
      )}
    </div>
  );
};

export default JsonRecipeDetails;
