import React, { useState } from 'react';

const MakeYourRecipe = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleCheckboxChange = (ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(selectedIngredients.filter(item => item !== ingredient));
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  return (
    <div>
      <h1>Make Your Recipe</h1>

      <h2>Select Ingredients</h2>
      <label>
        <input type="checkbox" onChange={() => handleCheckboxChange('chicken')} /> Chicken
      </label>
      <label>
        <input type="checkbox" onChange={() => handleCheckboxChange('tomato')} /> Tomato
      </label>
      <label>
        <input type="checkbox" onChange={() => handleCheckboxChange('onion')} /> Onion
      </label>
      <label>
        <input type="checkbox" onChange={() => handleCheckboxChange('garlic')} /> Garlic
      </label>
      <button onClick={() => alert('This feature is not yet available')}>Make</button>
    </div>
  );
};

export default MakeYourRecipe;