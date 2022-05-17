import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { GiMagnifyingGlass as SearchIcon } from "react-icons/gi";

import "./ing_search.css";
import "./recipe_card.css";

function IngredientSearch() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [recipeTitle, setRecipeTitle] = useState();
  const [recipeImage, setRecipeImage] = useState();

  let randomRecipeNumber = Math.floor(Math.random() * 100);

  const searchByIngredient = async () => {
    try {
      let URL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=e6b49728bdb1413d9301cf4b9d4028fb&ingredients=${inputValue}&number=100`;
      let response = await fetch(URL);
      let data = await response.json();
      console.log(data);
      setRecipeTitle(data[randomRecipeNumber].title);
      setRecipeImage(data[randomRecipeNumber].image);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <section className="ingredient_search">
        <h1 className="ingredient_search__title">Search by Ingredient</h1>
        <div className="search-bar">
          <input
            type="search"
            name="search"
            pattern=".*\S.*"
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="search-btn" onClick={searchByIngredient}>
            <span>
              <SearchIcon />
            </span>
          </button>
        </div>
        {error ? (
          <p>{error}</p>
        ) : (
          <div>
            <p>{recipeTitle}</p>
            <img src={recipeImage} alt="" />
          </div>
        )}
      </section>
    </>
  );
}

export default IngredientSearch;
