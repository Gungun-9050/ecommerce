import { useContext } from "react";
import React  from "react";
import { ShopContext } from "../Context/ShopContext";
import './css/ShopCategory.css';
import Items from "../components/Items/Items";
const ShopCategory=(props)=> {
    const{all_product} = useContext(ShopContext);
    return(
        <div className="shop-category">
          <img  className="banner"src={props.banner} alt="" />
        <div className="show">
            <p>Showing 1-12 out of 36 product</p>
            <button>Sort by</button>
        </div>
        <div className="shopcategory_product">
            {all_product.map((item,i)=>{
                 if (props.category===item.category) {
                return <>
                <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}  old_price={item.old_price}/>
                <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}  old_price={item.old_price}/>            
                </> 
                }
                else{
                    return null;
                }
            })}
             
        </div>
        </div>
    )
}
export default ShopCategory
