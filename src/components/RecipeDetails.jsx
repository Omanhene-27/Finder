import { useState, useEffect } from "react";

const RecipeDetails = ({ recipeId, onClose }) => {
    const [recipeDetails, setRecipeDetails] = useState(null);

    useEffect(() => {
        if (recipeId) {
            console.log("Fetching recipe details for ID:", recipeId);
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
                .then((response) => response.json())
                .then((data) => {
                  console.log("API Response:", data);
                  setRecipeDetails(data.meals ? data.meals[0] : null)})
                .catch((error) => console.error("API Error:", error));
        }
    }, [recipeId]); 

   if (!recipeDetails) {
       return <p>Loading recipe details...</p>;
   }

    return (
        <div>
            <button className="back-btn" onClick={onClose}>Back</button>
            <h2>{recipeDetails.strMeal}</h2>
            <img className="recipe-img" src={recipeDetails.strMealThumb} alt={recipeDetails.strMeal} />
            <p className="recipe-dtl">{recipeDetails.strInstructions}</p> 
        </div>
    );
};

export default RecipeDetails;
