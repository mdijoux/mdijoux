import React from "react";
import { Rater } from "../Rater";
import styles from "./Skill.module.css";

export const Skill = ({name, rate}: {name: string, rate: number}) => {
    return (
        <li className={styles.skill}>
            <div className={styles.name}>{name}</div>
            <Rater value={rate} />
        </li>
    )
}