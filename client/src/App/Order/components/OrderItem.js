import React from 'react';
import styles from "../index.module.scss";


const OrderItem = ({item}) => {
    return (
        <section className={styles.orderItem} >
            <span className={styles.title}>
                {item.title}
            </span>
            <span className={styles.title}>
               x{item.quantity}
            </span>
            <span className={styles.price}>
                ${item.price*item.quantity}
            </span>

        </section>
    );
};

export default OrderItem;