import React, { useState } from 'react';
import outputData from './output.json'; // Ensure this path is correct

const MakeYourRecipe = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [message, setMessage] = useState('');

  // Handle checkbox change
  const handleCheckboxChange = (ingredient) => {
    setSelectedIngredients(prevState => {
      const newIngredients = prevState.includes(ingredient)
        ? prevState.filter(item => item !== ingredient)
        : [...prevState, ingredient];

      console.log('Selected Ingredients:', newIngredients); // Log selected ingredients
      return newIngredients;
    });
  };

  // Check for recipes based on selected ingredients
  const handleSuggestRecipes = () => {
    const filteredRecipes = outputData.filter(recipe =>
      selectedIngredients.every(ing => recipe.ingredient.includes(ing))
    );

    console.log('Filtered Recipes:', filteredRecipes); // Log the filtered results

    // Update message based on whether recipes were found
    if (filteredRecipes.length > 0) {
      setMessage('Recipes found!');
    } else {
      setMessage('No recipes found for the selected ingredients.');
    }
  };

  return (
    <div>
      <h1>Make Your Recipe</h1>
      <h2>Select Ingredients</h2>
      {['chicken', 'tomato', 'onion', 'garlic', 'butter', 'apples', 'brown sugar', 'flour'].map(ingredient => (
        <label key={ingredient}>
          <input 
            type="checkbox" 
            onChange={() => handleCheckboxChange(ingredient)} 
          /> {ingredient}
        </label>
      ))}
      <button onClick={handleSuggestRecipes}>Make</button>

      <h2>{message}</h2>
    </div>
  );
};

export default MakeYourRecipe;
