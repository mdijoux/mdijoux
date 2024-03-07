import React, { ReactNode } from "react";
import styles from "./Experience.module.css";
import { SubTitle } from "../SubTitle";

type Props = {
    place: string;
    period: string;
    name: string;
    children: ReactNode;
}

export const Experience = ({place, period, name, children}: Props) => {
    return (
        <li className={styles.root}>
            <SubTitle className={styles.subtitle}>
                <span className={styles.place}>{place}</span>
                <span className={styles.period}>{period}</span>
            </SubTitle>
            <h4>{name}</h4>
            <p>{children}</p>
        </li>
    )
}