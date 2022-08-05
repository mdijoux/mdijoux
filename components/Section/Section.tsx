import React, { ReactNode } from "react";
import { HeaderBullet } from "../icons";
import styles from "./Section.module.css";

type Props = {
    name: string;
    children: ReactNode;
};

export const Section = ({name, children}: Props) => {
    return (
        <section className={styles.root}>
            <h1>
                <HeaderBullet className={styles.bullet} />
                {name}
            </h1>
            <div className={styles.content}>{children}</div>
        </section>
    );
};