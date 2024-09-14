import recipies from "./StylingPage/recipies.json"
import Recipe from "./StylingPage/Recipe"
import "./StylingPage/Recipe.css";

function StylingPage() {
  return (
    <Recipe className="main" recipes={recipies}/>
  );
}

export default StylingPage;
