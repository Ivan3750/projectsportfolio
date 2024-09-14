import ShopItem from "./ShopItem";
import styles from './ShopItem.module.css';
const Shop = ({ items }) => {
  return (
    <div className={styles.block}>
      {items.map((item, index) => (
        <ShopItem key={index} itemData={item} />
      ))}
    </div>
  );
};

export default Shop;
