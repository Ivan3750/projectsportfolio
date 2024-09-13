import  {MdToys} from "react-icons/md"
import  {GiPistolGun, GiClothes} from "react-icons/gi"
import  {FaStar, FaMoneyBill, FaWeightHanging, FaCube, Fashirt, FaGun} from "react-icons/fa"



const ShopItem = ({itemData}) =>{

    const categoryIcons = {
        Toys: <MdToys />,
        Weapons: <GiPistolGun />,
        Apparel: <GiClothes />
      };
    return(
<div className="container">
    <div className={itemData.available ? "item-available" : "item-unavailable"}></div>
    <h2 className="title">{itemData.name}</h2>
    <div className="info">
    <p>
        {categoryIcons[itemData.category]} {itemData.category}
      </p>
        <p><FaCube></FaCube> {itemData.details.dimensions}</p>
        <p><FaWeightHanging></FaWeightHanging> {itemData.details.weight}</p>
    </div>
    <p>
    <p>
  {Array.from({ length: 5 }, (e, index) => (
    <FaStar className="rating" key={index} style={{ fill: index < itemData.rating ? "gold" : "gray" }} 
    />
  ))}
  {itemData.rating}
  <p><FaMoneyBill></FaMoneyBill> <span className="price">€{itemData.price}</span></p>

</p>

</p>
</div>
    )
        
}

export default ShopItem;