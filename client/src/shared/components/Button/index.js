import React, {memo, useCallback} from 'react';
import styles from "./index.module.scss"

const Button = ({children, onClick}) => {

    const onClickHandler = useCallback(() =>{
        onClick()
    },[onClick])

    return (
        <div className={styles.btn}  onClick={onClickHandler}>
            {children}
        </div>
    );
};

export default memo(Button);