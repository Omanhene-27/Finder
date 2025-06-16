const RecipeCard = ({ recipe }) => {
    return (
        <div>
            <h3>{recipe.strMeal}</h3>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        </div>
    );
};

export default RecipeCard;