import React from "react"
import PropTypes from "prop-types"


const RecipeInfo = ({ text, icon: Icon }) => {
  return (
    <div className="recipe-info">
      <Icon className="recipe-info-icon" />
      <p className="recipe-info-text">{text}</p>
    </div>
  )
}

RecipeInfo.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,  
}

export default RecipeInfo
