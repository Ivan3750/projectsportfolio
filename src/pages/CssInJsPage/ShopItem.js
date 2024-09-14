import  {MdToys} from "react-icons/md"
import  {GiPistolGun, GiClothes} from "react-icons/gi"
import  {FaStar, FaMoneyBill, FaWeightHanging, FaCube, Fashirt, FaGun} from "react-icons/fa"
import styles from './ShopItem.module.css';



const ShopItem = ({itemData}) =>{

    const categoryIcons = {
        Toys: <MdToys />,
        Weapons: <GiPistolGun />,
        Apparel: <GiClothes />
      };
    return(
<div className={styles.container}>
<div className={itemData.available ? styles.itemAvailable : styles.itemUnavailable}></div>
    <h2 className={styles.title}>{itemData.name}</h2>
    <div className={styles.info}>
    <p>
        {categoryIcons[itemData.category]} {itemData.category}
      </p>
        <p><FaCube></FaCube> {itemData.details.dimensions}</p>
        <p><FaWeightHanging></FaWeightHanging> {itemData.details.weight}</p>
    </div>
    <p>
    <p>
  {Array.from({ length: 5 }, (e, index) => (
    <FaStar className={styles.rating} key={index} style={{ fill: index < itemData.rating ? styles.gold : styles.gray }} 
    />
  ))}
  {itemData.rating}
  <p><FaMoneyBill></FaMoneyBill> <span className={styles.price}>€{itemData.price}</span></p>

</p>

</p>
</div>
    )
        
}

export default ShopItem;