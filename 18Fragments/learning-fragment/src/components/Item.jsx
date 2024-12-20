import styles from "./Item.module.css"


const Item =({foodItem}) => {

 const handleBuyButtonClick =(foodItem) =>{
  console.log(`${foodItem} being bought`);
 } ;

return(
  <li className={`${styles["kg-item"]}`}>
 <span className={styles["kg-span"]}>{foodItem}</span> 
 <button className={`${styles.button} btn btn-info`}
 onClick={()=>handleBuyButtonClick(foodItem)}>Buy
 </button>
</li>
);
};
export default Item;