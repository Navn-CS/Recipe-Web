import { db } from './firebase.js'; // Ensure this is the correct path to your firebase.js file
import { collection, addDoc } from 'firebase/firestore';

const recipes = [
  {
    name: "test",
    desc: "ttt",
    image: "https://firebasestorage.googleapis.com/v0/b/recipe-web-b114b.appspot.com/o/beeftacos.jpg?alt=media&token=2618a360-a103-40cf-9a5c-3b4b4a2c23d9",
    ingredients: ["ttt", "tt", "ttx", "Tomato ttsauce", "Crtteam"],
    cooking: [
      "tnd spices.",
      "Gtt.",
      "Prept cream.",
      "Combine tsauce, simmer briefly.",
      "Serve with tnaan."
    ],
  }
];

const addRecipesToFirestore = async () => {
  try {
    const recipeCollection = collection(db, 'recipes');
    for (const recipe of recipes) {
      await addDoc(recipeCollection, recipe);
      console.log(`Added recipe: ${recipe.name}`);
    }
    console.log('All recipes added successfully!');
  } catch (error) {
    console.error('Error adding recipes: ', error);
  }
};

addRecipesToFirestore();