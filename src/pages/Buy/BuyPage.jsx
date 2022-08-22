import React, { useState } from "react";
import styles from "./BuyPage.module.css";
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const BuyPage = () => {
  const [modalShow, setModalShow] = React.useState(false);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Заказ отправлен!</h4>
          <p>
            Ваш заказ был успешно получен, примерная дата доставки 30.08.2022
            14:50
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const [price, setPrice] = useState(0);
  const [time, setTime] = useState("");
  const [value, setValue] = useState();

  const handlePochta = () => {
    setPrice(100);
    setTime("2 месяца");
  };
  const handleDPD = () => {
    setPrice(700);
    setTime("3 недели");
  };
  const handleCDEK = () => {
    setPrice(1300);
    setTime("1 неделя");
  };
  return (
    <div className={styles.body}>
      <div className={styles.bodyTitle}>
        <div className={styles.title}>
          <h1>ОФОРМЛЕНИЕ ЗАКАЗА</h1>
        </div>
      </div>
      <div className={styles.bodyMain}>
        <div className={styles.block_1}>
          <div className={styles.info}>
            <img
              src="https://habrastorage.org/storage1/7bb3b191/ada6e0bc/2a3e050a/3ef3c1fd.png"
              alt=""
            />
          </div>
          <div className={styles.delivery}>
            <div className={styles.delivery_main}>
              <h3>ВЫБЕРИТЕ СПОСОБ ДОСТАВКИ:</h3>
              <div className={styles.images}>
                <img
                  src="https://irecommend.ru/sites/default/files/product-images/10297/pochta_rossii-1.jpg"
                  alt=""
                />
                <button onClick={handlePochta}>Почта России</button>
              </div>
              <div className={styles.images}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/DPD_logo_%282015%29.svg/2560px-DPD_logo_%282015%29.svg.png"
                  alt=""
                />
                <button onClick={handleDPD}>DPD</button>
              </div>
              <div className={styles.images}>
                <img
                  src="https://int-sm.ru/upload/iblock/4a3/4a3f65f4568dee5b9a73d9bdb22f34b2.jpg"
                  alt=""
                />
                <button onClick={handleCDEK}>СДЭК</button>
              </div>
              <div className={styles.text_deliv}>
                <span>Цена доставки: {price} ₽</span>
              </div>
              <div className={styles.text_deliv}>
                <span>Время доставки: {time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sposob_dostavki}>
        <h2>ВЫБЕРИТЕ ТИП ДОСТАВКИ:</h2>
        <div className={styles.line}></div>
        <div className={styles.sposob_punkts}>
          <div className={styles.radio}>
            <input type="radio" />
            <div className={styles.radio}>
              <div className={styles.title_radio}>
                <span>СТАНДАРТНАЯ ДОСТАВКА</span>
                <p>
                  Доставка на дом, Заказы, сделанные в настоящее время ожидается
                  прибытие до Четверг, Сен 15 - Суббота, Сен 17.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.radio}>
            <input type="radio" />
            <div className={styles.title_radio}>
              <span>САМОВЫВОЗ ИЗ ПУНКТА ВЫДАЧИ</span>
              <p>
                Заказы, сделанные в настоящее время ожидается прибытие до
                Четверг, Сен 1 - Суббота, Сен 3. Необходимо предоставить паспорт
                и СМС для получения при выдачи посылок
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sposob_dostavki}>
        <h2>СПОСОБ ОПЛАТЫ:</h2>
        <div className={styles.line}></div>
        <div className={styles.sposob_punkts}>
          <div className={styles.radio}>
            <input type="radio" />
            <div className={styles.card}>
              <img
                src="https://img.ltwebstatic.com/images2_pi/2018/06/06/1528271522291435151.webp"
                alt=""
              />
              <div className={styles.debet_block}>
                <span>Кредитная дебетовая карта</span>
                <RiVisaFill fontSize={"2rem"} />
                <FaCcMastercard fontSize={"1.9rem"} />
                <FaCcPaypal fontSize={"1.8rem"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sposob_dostavki}>
        <h2>ВЫБЕРИТЕ АДРЕС ДОСТАВКИ:</h2>
        <div className={styles.line}></div>
        <div className={styles.sposob_punkts}>
          <div className={styles.radio}>
            <div className={styles.adress}>
              <AddressSuggestions
                token="1aefe2f496e483be62e381505453b58c74a6d098"
                value={value}
                onChange={setValue}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.oplata}>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          ПОДТВЕРДИТЬ ЗАКАЗ
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  );
};

export default BuyPage;
