import React from "react"
import RecipeItem from "./RecipeItem"
import "./Recipe.css"


const Recipe = ({ recipes }) => {
  return (
    <div className="main">
      {recipes.map((recipe, index) => (
        <RecipeItem 
          key={index} 
          name={recipe.name} 
          time={recipe.time} 
          servings={recipe.servings}
          calories={recipe.calories} 
          difficulty={recipe.difficulty} 
          image={recipe.image}
        />
      ))}
    </div>
  )
}

export default Recipe
