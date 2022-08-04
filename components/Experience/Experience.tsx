import React, { ReactNode } from "react";
import styles from "./Experience.module.css";

type Props = {
    place: string;
    period: string;
    name: string;
    children: ReactNode;
}

export const Experience = ({place, period, name, children}: Props) => {
    return (
        <li className={styles.root}>
            <h3>
                <div>{place}</div>
                <div>{period}</div>
            </h3>
            <h4>{name}</h4>
            <p>{children}</p>
        </li>
    )
}