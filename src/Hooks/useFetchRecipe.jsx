import { useEffect, useState } from "react";

const useFetchRecipe = () => {

    const [recipeInfo, setRecipeInfo] = useState('');
    const [error, setError] = useState('');
    const [image, setImage] = useState();

    useEffect(async () => {
        try {
            let recipeURL =
              "https://api.spoonacular.com/recipes/random?apiKey=e6b49728bdb1413d9301cf4b9d4028fb";
            let responseRecipe = await fetch(recipeURL);
            let recipeData = await responseRecipe.json();
            setRecipeInfo(recipeData.recipes[0]);
            setImage(recipeData.recipes[0].image);
            console.log(recipeData);
          } catch (err) {
            console.log(err);
            setError("Something went wrong while fetching your recipe, sorry about that")
          }
    }, []);
    return { recipeInfo, image, error }
}

export default useFetchRecipe;