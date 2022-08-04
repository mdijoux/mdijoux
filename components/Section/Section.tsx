import React, { ReactNode } from "react";
import styles from "./Section.module.css";

type Props = {
    name: string;
    children: ReactNode;
};

export const Section = ({name, children}: Props) => {
    return (
        <section className={styles.root}>
            <h1>{name}</h1>
            <div className={styles.content}>{children}</div>
        </section>
    );
};