import React from "react";
import styles from "./Rater.module.css";

const RATES = [1,2,3,4,5];
export const Rater = ({value}: {value: number}) => {

    return (
        <ul className={styles.rater}>
            {RATES.map((rate) => {
                return <li key={rate} className={rate > value ? styles.empty : styles.full }></li>
            })}
        </ul>
    )
}