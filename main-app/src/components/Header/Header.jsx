import React, { useRef, useEffect,useState,createContext } from "react";

import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import styles from "./Header.module.scss"; //css module
import './header.scss'
const nav__links = [
  {
    display: "Ürünler",
    path: "/urunler",
  },
  {
    display: "Sepetim",
    path: "/sepetim",
  }
];

export const ThemeContext = createContext(null);

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  //mobile
  const toggleMenu = () => menuRef.current.classList.toggle("show-menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header-shrink");
      } else {
        headerRef.current.classList.remove("header-shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);

  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <header className={styles.header} ref={headerRef} id={theme}>
      <Container >
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
            <h5>SEPETİM</h5>
          </div>

          {/* -------- menu -------- */}
          <div className={styles.navigation} ref={menuRef} onClick={toggleMenu}>
            <div className={styles.menu}>
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active-menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* -------- nav right icons -------- */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className={styles["cart-icon"]} onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span className={styles.cartbadge}>{totalQuantity}</span>
            </span>

            <span className={styles["user-heart"]}>
              <Link to="/">
                <i class="ri-heart-fill"></i>
              </Link>
            </span>
            <span className={styles.user}>
              <Link to="/">
              
                <i className="switch" class="ri-moon-fill" onChange={toggleTheme} checked={theme === "dark"} ></i>
              </Link>
            </span>

            <span className={styles["mobile-menu"]} onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
    </ThemeContext.Provider>
  );
};

export default Header;
