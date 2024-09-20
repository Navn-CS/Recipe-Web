import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.js'; // Import your Firebase config
import { Link } from 'react-router-dom';

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [foodtypeFilter, setFoodtypeFilter] = useState('');
  const [dietFilter, setDietFilter] = useState('');

  // Fetch recipes from Firestore
  const fetchRecipes = async () => {
    const querySnapshot = await getDocs(collection(db, 'recipes'));
    const fetchedRecipes = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setRecipes(fetchedRecipes);
    setFilteredRecipes(fetchedRecipes);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  // Filter function
  const filterRecipes = () => {
    let filtered = recipes;
    if (foodtypeFilter) {
      filtered = filtered.filter(recipe => recipe.foodtype === foodtypeFilter);
    }
    if (dietFilter) {
      filtered = filtered.filter(recipe => recipe.diet === dietFilter);
    }
    setFilteredRecipes(filtered);
  };

  // Call filterRecipes whenever the filter values change
  useEffect(() => {
    filterRecipes();
  }, [foodtypeFilter, dietFilter]);

  return (
    <div className="container mt-5">
      <h1>Recipes</h1>

      {/* Dropdown Filters */}
      <div className="row mb-4">
        <div className="col-md-6">
          <label htmlFor="foodtype">Filter by Food Type</label>
          <select
            id="foodtype"
            className="form-control"
            value={foodtypeFilter}
            onChange={(e) => setFoodtypeFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="Snacks">Snacks</option>
            <option value="Dessert">Dessert</option>
            <option value="Meal">Meal</option>
            <option value="Vegetable">Vegetable</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="diet">Filter by Diet</label>
          <select
            id="diet"
            className="form-control"
            value={dietFilter}
            onChange={(e) => setDietFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="Healthy">Healthy</option>
            <option value="Unhealthy">Unhealthy</option>
          </select>
        </div>
      </div>

      {/* Recipes */}
      <div className="row">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
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

export default Recipe;
