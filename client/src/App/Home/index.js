import React from 'react';
import styles from './index.module.scss';


const Home = () => {
    return (
        <div className = {styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.welcome}>Welcome to</div>

                    <h1> Serge's Store </h1>
            </div>
            <div className={styles.shade}/>
            <div className={styles.card__bg__image}>
                <img alt="" src="http://media.futurebutterflies.net/houston-besomeone.jpg"/>
            </div>
        </div>
    );
};

export default Home;