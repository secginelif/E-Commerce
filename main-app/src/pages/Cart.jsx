import React from "react";

import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import styles from "./cartPage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <CommonSection title="Sepetim" />
      <section>
        <Container className={styles.container}>
          <Row>
            <Col lg="12" className={styles["text-center"]}>
              {cartItems.length === 0 ? (
                <h5 >Sepetinizde Ürün Bulunmamaktadır</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className="mt-4">
                <h6>
                  Toplam Tutar: ₺
                  <span className={styles["cart__subtotal"]}>{totalAmount}</span>
                </h6>
                <p>Kargo Ücreti Hesaplanacaktır</p>
                <div className={styles["cart__page-btn"]}>
                  <button className={styles["addTOCart__btn"]}>
                    <Link to="/foods" className={styles.link}>Alışverişe Devam</Link>
                  </button>
                  <button className={styles["addTOCart__btn"]} >
                    <Link to="/checkout" className={styles.link}>Ürünleri Satın Al</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className={styles["cart__img-box"]}>
        <img src={image01} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity}</td>
      <td className={styles["cart__item-del"]}>
        <i class="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default Cart;
