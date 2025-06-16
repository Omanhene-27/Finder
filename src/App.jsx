import { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import './App.css';
import RotatingText from './components/RotatingText';
import Footer from './components/Footer';
import './components/RotatingText.css';
function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);


  return (
    <>
      <div>
<RotatingText
className="rote"
  texts={['Recipe Finder', 'Find Meals Fast', 'Cook Something New', 'Discover Delicious Recipes']}
  mainClassName="text-4xl font-extrabold text-center text-blue-500"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>
        <SearchBar onSearch={setSearchQuery} />
        {!selectedRecipe ? (
          <RecipeList searchQuery={searchQuery} onSelectRecipe={setSelectedRecipe} />
        ) : (
          <RecipeDetails recipeId={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
        )}
        <Footer />
      </div>
    </>
  );
};

export default App
