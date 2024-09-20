import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.js'; // Import your Firebase config
import { Link } from 'react-router-dom';
import mainImage from './homeimage.jpeg'; // Main image

const Home = () => {
  const [randomRecipes, setRandomRecipes] = useState([]);

  // Fetch random recipes from Firestore
  const fetchRandomRecipes = async () => {
    const querySnapshot = await getDocs(collection(db, 'recipes'));
    const fetchedRecipes = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    // Shuffle the recipes and get the first three
    const shuffledRecipes = fetchedRecipes.sort(() => 0.5 - Math.random());
    setRandomRecipes(shuffledRecipes.slice(0, 3));
  };

  useEffect(() => {
    fetchRandomRecipes();
  }, []);

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
      </div>
      <div className="text-center mb-4">
        <h2>Welcome to Our Recipe App!</h2>
        <p>
          Discover a variety of delicious recipes. Whether you're looking for a healthy meal or a sweet dessert, our easy-to-follow recipes will make cooking enjoyable for everyone!
        </p>
        <img src={mainImage} alt="Main" className="img-fluid" style={{ maxWidth: '60%', height: 'auto', margin: '0 auto' }} />
      </div>

      <h2 className="mt-5">Recommendations</h2>
      <div className="row">
        {randomRecipes.length > 0 ? (
          randomRecipes.map((recipe) => (
            <div className="col-md-4" key={recipe.id}>
              <div className="card mb-4">
                <img
                  src={recipe.images}
                  className="card-img-top"
                  alt={recipe.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>
                  <p className="card-text">{recipe.desc}</p>
                  <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">
                    View Recipe
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
