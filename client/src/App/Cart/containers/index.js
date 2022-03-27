import React, { Component } from "react";
import { connect } from "react-redux";
import { cartSelector } from "../store/cartSelector";
import styles from "./index.module.scss";
import FilledCart from "./FilledCart";
import { EmptyCart } from "../componens/EmptyCart";

class Cart extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div className={styles.cart}>
        {cart.length ? <FilledCart  /> : <EmptyCart />}
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { cart, totalAmount
  } = cartSelector(state);
  return {
    cart ,
    totalAmount,
  };
}

export default connect(mapStateToProps)(Cart);
