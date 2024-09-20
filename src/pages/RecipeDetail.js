import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase.js'; // Import your Firebase config
import { doc, getDoc } from 'firebase/firestore';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  // Fetch recipe details from Firestore
  const fetchRecipeDetails = async () => {
    try {
      const docRef = doc(db, 'recipes', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setRecipe({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error('Error fetching recipe details: ', error);
    }
  };

  useEffect(() => {
    fetchRecipeDetails();
  }, [id]);

  return (
    <div className="container mt-5">
      {recipe ? (
        <>
          <h1>{recipe.name}</h1>
          <img src={recipe.images} alt={recipe.name} className="img-fluid" />
          <p>{recipe.desc}</p> {/* Display the short description */}
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients && recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h2>Cooking Instructions</h2>
          <ol>
            {recipe.cooking && recipe.cooking.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RecipeDetail;
