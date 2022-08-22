import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MainProducts.module.css";
import { useEffect } from "react";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { getProducts } from "../../components/features/productsSlice";
import {
  addProductInBasket,
  getCart,
} from "../../components/features/cartSlice";

const Products = (props) => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.cart.cart.products);

//   useEffect(() => {
//     dispatch(getCart());
//   }, [dispatch]);

//   cart.map((item) => {
//     console.log(item.productId);
//   });




  const handleAddInBasket = (productId) => {
    dispatch(addProductInBasket({ productId }));
  };

  const buttonOff = props.cartInfo.find(item => item.productId === props.product._id)
  if(props.product.size === "XL") {

  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <div>
          <img src={props.images[0].image}/>
        </div>
        <div class>
          <button></button>
        </div>
        <div className={styles.product_info}>
          <span>{props.product.size}</span>
          <span>{props.product.name}</span>
          <span>{props.product.price}₽</span>
        </div>
        <div className={styles.btn}>
          <button disabled={buttonOff} onClick={() => handleAddInBasket(props.product._id)}>
            Купить
          </button>
          <FcLikePlaceholder fontSize={"2rem"} onClick={() => handleAddInFavorite(props.product._id)} cursor='pointer' className={styles.like}/>
      return (
        <div className={styles.product}>
          <div className={styles.image}>
            <div>
                {props.images.map((item) => {
                    if(item.color === 'black') {
                        return (
                            <img src={item.image} alt="" />
                        )
                    }
                })}
            </div>
            <div class>
              <button></button>
            </div>
            <div className={styles.product_info}>
              <span>{props.product.name}</span>
              <span>{props.product.price}₽</span>
            </div>
            <div className={styles.btn}>
              <button disabled={!props.product.left || buttonOff} onClick={() => handleAddInBasket(props.product._id)}>
                Купить
              </button>
            </div>
          </div>
        </div>
      );
  }
};

export default Products;

{
  /* <div className={styles.colors}>
<RiCheckboxBlankCircleFill style={{color: "black", fontSize: '1rem'}}/>
<RiCheckboxBlankCircleFill style={{color: "gray", fontSize: '1rem'}}/>
<RiCheckboxBlankCircleFill style={{color: "rgb(64, 105, 255)", fontSize: '1rem'}}/>
</div> */
}
