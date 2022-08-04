import React from "react";
import styles from "./Training.module.css";

type Props = {
    institution: string;
    period: string;
    name: string;
    location: string;
}
export const Training = ({institution, period, name, location}: Props) => {

    return (
        <li className={styles.root}>
            <h3>
                <span>{name}</span>
                <span className={styles.period}>{period}</span>
            </h3>
            <h4>
                <span>{institution}</span>
                <span className={styles.location}>{location}</span>
            </h4>
        </li>
    )
}