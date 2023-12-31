import React, { useState } from 'react';
import './App.css'; 

const RecipeGenerator = () => {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleInputChange = (e) => {
    setIngredients(e.target.value);
  };

  const handleGenerateRecipes = () => {
    // Logic to generate recipes based on entered ingredients
    const ingredientList = ingredients.split(',').map((ingredient) => ingredient.trim());

    // Simple placeholder logic for generating a sample recipe based on entered ingredients
    const recipeName = 'Custom Recipe';
    const recipeInstructions = 'Mix all the ingredients together and cook for 30 minutes. Enjoy!';
    const generatedRecipes = [
      {
        id: 1,
        name: recipeName,
        ingredients: ingredientList,
        instructions: recipeInstructions,
      },
    ];

    setRecipes(generatedRecipes);
  };

  return (
    <div className="recipe-generator-container">
      <h2>Recipe Generator</h2>
      <div className="input-section">
        <label htmlFor="ingredientsInput">Enter Ingredients :</label>
        <input
          type="text"
          id="ingredientsInput"
          value={ingredients}
          onChange={handleInputChange}
          placeholder="e.g., tomato, onion, garlic"
        />
        <button onClick={handleGenerateRecipes}>Generate Recipes</button>
      </div>
      <div className="recipes-list">
        <h3>Generated Recipes:</h3>
        {recipes.length === 0 ? (
          <p>No recipes generated yet. Enter ingredients and click 'Generate Recipes'.</p>
        ) : (
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipe">
              <h4>{recipe.name}</h4>
              <p>
                Ingredients: {recipe.ingredients.map((ingredient) => ingredient).join(', ')}
              </p>
              <p>Instructions: {recipe.instructions}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecipeGenerator;
