import Shop from './CssInJsPage/Shop';
import items from "./CssInJsPage/items.json"
import "./CssInJsPage/ShopItem.css"
function App() {
  return (
   <Shop items={items} />
  );
}

export default App;
