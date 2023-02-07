import React from "react";
import { Container, Row, Col} from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import styles from './Footer.module.scss'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
            <Col>
            <div className={styles.footerlogo}>
              <img src={logo} alt="logo" />
              <h5>SEPETİM</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt pariatur accusamus
              </p>
            </div>
              </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
