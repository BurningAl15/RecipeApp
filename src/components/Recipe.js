import React from "react";
import style from "./css/recipe.module.css"

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li className="elementsInList">{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories: {calories}</p>
      <div className={style.imageContainer}>

      <img className={style.imageRound} src={image} alt="" />
      </div>
    </div>
  );
};

export default Recipe;
