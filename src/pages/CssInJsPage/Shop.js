import ShopItem from "./ShopItem";

const Shop = ({ items }) => {
  return (
    <div className="block">
      {items.map((item, index) => (
        <ShopItem key={index} itemData={item} />
      ))}
    </div>
  );
};

export default Shop;
