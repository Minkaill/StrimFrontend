import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getChasi,
  getCostums,
} from "../../../components/features/productsSlice";
import Categories from "../Categories";
import styles from "../MainProducts.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FcLikePlaceholder } from "react-icons/fc";
import { getCart } from "../../../components/features/cartSlice";

const Chasi = () => {
  const chasi = useSelector((state) => state.products.chasi);
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  const chasiSearch = chasi.filter((item) => {
    return item.name.toLowerCase().includes(text.toLowerCase());
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChasi());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  console.log(chasi);
  return (
    <div className={styles.main}>
      <div className={styles.categories}>
        <div className={styles.title}>
          <span>РАЗДЕЛЫ</span>
        </div>
        <div className={styles.search}>
          <input type="text" value={text} onChange={handleChange} />
          <span>
            <AiOutlineSearch fontSize={"26"} />
          </span>
        </div>
        <Categories />
      </div>
      <div className={styles.products}>
        {chasiSearch.map((product) => {
          return (
            <div className={styles.product}>
              <div className={styles.image}>
                <div>
                  {product.images.map((item) => {
                    if (item.color === "black") {
                      return <img src={item.image} alt="" />;
                    }
                  })}
                </div>
                <div class>
                  <button></button>
                </div>
                <div className={styles.product_info}>
                  <span>{product.size}</span>
                  <span>{product.name}</span>
                  <span>{product.price}₽</span>
                </div>
                <div className={styles.btn}>
                  <button>Купить</button>
                  <FcLikePlaceholder fontSize={"2rem"} cursor="pointer" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chasi;
