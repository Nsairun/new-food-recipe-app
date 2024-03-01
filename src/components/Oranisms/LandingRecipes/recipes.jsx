import React, { useState, useEffect } from 'react';
import recipesData from '../../../meal.json';
import './recipe.css';

function Recipes() {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    setRecipeList(recipesData);
  }, []);

  return (
    <div className="recipe-container">
      {recipeList.map((recipe) => (
        <div
          key={recipe.name}
          style={{ width: '25vw' }}
          className="recipe-holder"
        >
          <h1 style={{ textAlign: 'left', fontSize: '20px' }}>{recipe.name}</h1>
          <img src={recipe.image} alt="recipe" />
          <p style={{ textAlign: 'left' }}>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Recipes;
