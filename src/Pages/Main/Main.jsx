import React from "react";
import "./main.scss";
import {
  AiFillCloseCircle as XIcon,
  AiFillCheckCircle as Check,
} from "react-icons/ai";
import Navbar from '../../components/Navbar/Navbar'

import useFetchRecipe from '../../Hooks/useFetchRecipe';

function Main() {

  const { recipeInfo, image, error } = useFetchRecipe();

 
  //Absolte dogshit dont do this

    let isVegan = recipeInfo.vegan;
    let isCheap = recipeInfo.cheap;
    let pricePerServing = recipeInfo.pricePerServing;
    let isVegetarian = recipeInfo.isVegetarian;
    let isGlutenFree = recipeInfo.glutenFree;
    let isDairyFree = recipeInfo.dairyFree;
    let isVeryHealthy = recipeInfo.veryHealthy;

    return (
      <>
      <Navbar />
      <br />
      <br />
      <br />
        <section className="recipe-info-section">
          <div className="recipe-info">
            <h1>Your Random Recipe:</h1>
            <h1>{recipeInfo.title}</h1>
          </div>
          <div className="recipe-info-table">
            <div className="recipe-info-table-block">
              <p>Vegan</p>
              <span className={ isVegan ? "true" : "false" }>{ isVegan ? <Check /> : <XIcon /> }</span>
            </div>
            <div className="recipe-info-table-block">
              <p>Cheap</p>
              <span className={ isCheap ? "true" : "false" }>{ isCheap ? <Check /> : <XIcon /> }</span>
            </div>
            <div className="recipe-info-table-block">
              <p>Price / Serving</p>
              <span>{ pricePerServing }$</span>
            </div>
            <div className="recipe-info-table-block">
              <p>Vegetarian</p>
              <span className={ isVegetarian ? "true" : "false" }>{ isVegetarian ? <Check /> : <XIcon /> }</span>
            </div>
            <div className="recipe-info-table-block">
              <p>Gluten Free</p>
              <span className={ isGlutenFree ? "true" : "false" }>{ isGlutenFree ? <Check /> : <XIcon /> }</span>
            </div>
            <div className="recipe-info-table-block">
              <p>Dairy Free</p>
              <span className={ isDairyFree ? "true" : "false" }>{ isDairyFree ? <Check /> : <XIcon /> }</span>
            </div>
            <div className="recipe-info-table-block">
              <p>Very Healthy</p>
              <span className={ isVeryHealthy ? "true" : "false" }>{ isVeryHealthy ? <Check /> : <XIcon /> }</span>
            </div>
          </div>
          <img src={image} />
        </section>
      </>
    );
  }

export default Main;
