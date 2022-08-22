import React, { useEffect } from "react";
import styles from "./FavoritePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductInBasket,
  getCart,
} from "./../../components/features/cartSlice";
import { Link } from "react-router-dom";
import {
  getFavorite,
  deleteProductFromFavorite,
} from "./../../components/features/favoriteSlice";

const CartPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorite());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const handleAddInBasket = (productId) => {
    dispatch(addProductInBasket({ productId }));
    console.log(productId);
  };

  const handleDelete = (productId) => {
    dispatch(deleteProductFromFavorite({ productId }));
    console.log(productId);
  };

  const favorite = useSelector((state) => state.favorite.favorite.products);
  const cart = useSelector((state) => state.cart.cart.products);


  if (favorite) {
    const favoriteProducts = favorite.map((product) => {
      if (product.left === 0) {
        return (
          <>
            <div className={styles.line}></div>
            <div className={styles.card_prod}>
              <div className={styles.image_block}>
                {product.images.map((images) => {
                  if (images.color === "black") {
                    return <img src={images.image} alt="" />;
                  }
                })}
              </div>
              <div className={styles.info_prices}>
                <div className={styles.prod_name}>
                  <span>{product.name}</span>
                </div>
                <table className={styles.table}>
                  <thead>
                    <tr className={styles.tr}>
                      <th>Размер</th>
                      <th>Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={styles.tr}>
                      <td>{product.size}</td>
                      <td>{product.price} ₽</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <div className={styles.next_func}>
                  <button>Нет на складе</button>
                  <button onClick={() => handleDelete(product._id)}>
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      } else {
        return (
          <>
            <div className={styles.line}></div>
            <div className={styles.card_prod}>
              <div className={styles.image_block}>
                {product.images.map((images) => {
                  if (images.color === "black") {
                    return <img src={images.image} alt="" />;
                  }
                })}
              </div>
              <div className={styles.info_prices}>
                <div className={styles.prod_name}>
                  <span>{product.name}</span>
                </div>
                <table className={styles.table}>
                  <thead>
                    <tr className={styles.tr}>
                      <th>Размер</th>
                      <th>Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={styles.tr}>
                      <td>{product.size}</td>
                      <td>{product.price} ₽</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <div className={styles.next_func}>
                  <button onClick={() => handleAddInBasket(product._id)}>
                    Добавить в корзину
                  </button>
                  <button onClick={() => handleDelete(product._id)}>
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      }
    });
  
    return (
      <div className={styles.back}>
        <div className={styles.title}>
          <h1>СПИСОК ПОНРАВИВШЕГОСЯ</h1>
        </div>
        <div className={styles.main_content}>
          <div className={styles.cartInfo}>
            <div className={styles.products_cart}>
              <h2>Краткое описание товара</h2>
              <div className={styles.products}>{favoriteProducts}</div>
            </div>
          </div>
          <div className={styles.buy_info}>
            <div className={styles.buy_main}>
              <div className={styles.btn_oplata}>
                <Link to="/cart">
                  <button>ПЕРЕЙТИ К КОРЗИНЕ</button>
                </Link>
              </div>
            </div>
            <div className={styles.sposob_oplati}></div>
          </div>
        </div>
      </div>
    );
  }
};

export default CartPage;
