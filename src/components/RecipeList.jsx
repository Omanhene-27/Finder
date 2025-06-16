import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard"; 
const RecipeList = ({ searchQuery, onSelectRecipe }) => {
    const [recipes, setRecipes] = useState([]);
    const [searchTriggered, setSearchTriggered] = useState(false);

    useEffect(() => {
        if (searchQuery) {
            console.log("Fetching recipes for:", searchQuery);
            setSearchTriggered(true);
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
                .then((response) => response.json())
                .then((data) => { 
                console.log("API Response:", data);
                setRecipes(data.meals || []); 
            })
                .catch((error) => {
                    console.error("API Error:", error);
                });
           }
        }, [searchQuery]);
    return (
    <div className ="recipe-grid">
        {searchTriggered && recipes.length === 0 && (
            <p>No recipes found for "{searchQuery}". Please try a different ingredient.</p>
        )}
        {recipes.length > 0 &&
            recipes.map((recipe) => (
                <div className="recipe-card" key={recipe.idMeal} onClick={() => onSelectRecipe(recipe.idMeal)}>
                    <RecipeCard recipe={recipe} />
                </div>
            ))}
    </div>
);

};

export default RecipeList;