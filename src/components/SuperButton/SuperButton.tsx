import React from 'react';
import styles from './SuperButton.module.css'

type ButtonType = {
    buttonName: string,
    callBack: () => void
}

export const SuperButton = (props: ButtonType) => {

    const onclickButtonHandler = () => props.callBack()

    return (
        <div className={styles.item}>
            <button onClick={onclickButtonHandler}>{props.buttonName}</button>
        </div>
    )
}