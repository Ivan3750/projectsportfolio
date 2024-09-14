import React from "react"
import PropTypes from "prop-types"
import { FaClock, FaUtensils, FaFire, FaAppleAlt } from "react-icons/fa"
import RecipeInfo from "./RecipeInfo"
import "./Recipe.css"

const RecipeItem = ({ name, time, servings, calories, difficulty, image }) => {
  const icons = {
    time: FaClock,
    servings: FaUtensils,
    calories: FaFire,
    difficulty: FaAppleAlt,
  }

  return (
    <div className="recipe-item">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <div className="recipe-info-box">
      <RecipeInfo text={`${time} minutes`} icon={icons.time} />
      <RecipeInfo text={`${servings}`} icon={icons.servings} />
      <RecipeInfo text={`${calories} calories`} icon={icons.calories} />
      <RecipeInfo text={["Easy", "Medium", "Hard"][difficulty]} icon={icons.difficulty} />
      </div>
    </div>
  )
}

RecipeItem.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  servings: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  difficulty: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
}

export default RecipeItem
