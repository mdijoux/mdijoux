import React from "react";
import styles from "./Training.module.css";
import { MapMarker } from "../icons/MapMarker";
import { SubTitle } from "../SubTitle";

type Props = {
    institution: string;
    period: string;
    name: string;
    location: string;
}
export const Training = ({institution, period, name, location}: Props) => {

    return (
        <li className={styles.root}>
            <SubTitle className={styles.subtitle}>
                <span className={styles.name}>{name}</span>
                <span className={styles.period}>{period}</span>
            </SubTitle>
            <h4>
                <span>{institution}</span>
                <span className={styles.location}>
                    <MapMarker className={styles.marker} />
                    {location}</span>
            </h4>
        </li>
    )
}