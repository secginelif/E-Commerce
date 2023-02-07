import React from "react";

import styles from "./Product-card.module.scss";



import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
// import { favActions } from "../../../store/favori/Slice";


const ProductCard = (props) => {
  const { id, title, image01, description, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        description,
        price,
      })
    );
  };
  // const addToFavorites = () => {
  //   dispatch(
  //     favActions.addItem({
  //       id,
  //       title,
  //       image01,
  //       description,
  //       price,
  //     })
  //   );
  // };

  

  return (
    <div className={styles["product-item"]}>
      <button  className={styles.heart} ><i   className="ri-heart-fill"></i></button>
      <div className={styles["product-img"]}>
        <img src={image01} alt="product-img" className="w-50" />
      </div>
      

      <div className={styles["product-content"]}>
        <h5>
         {title}
        </h5>
        <p>
          {description}
        </p>
        <div className="box">
          
          <div className={styles["product-price"]}>${price}</div>
        <div>
          
          <button className={styles["addTOCart-btn"]} onClick={addToCart}>
            Sepete Ekle
          </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
