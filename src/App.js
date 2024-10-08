import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Recipe from './pages/Recipe.js';
import RecipeDetail from './pages/RecipeDetail.js'; // Import the new component
import Contact from './pages/Contact.js';
import MakeYourRecipe from './pages/MakeYourRecipe.js';
import JsonRecipeDetails from './pages/JsonRecipeDetails.js';
import Navbar from './components/Navbar.js'; 

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/makeyourrecipe" element={<MakeYourRecipe />} />
          <Route path="/json-recipe/:id" component={JsonRecipeDetails} />
          <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* New route for recipe detail */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;