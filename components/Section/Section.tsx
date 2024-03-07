import React, { ReactNode } from "react";

import styles from "./Section.module.css";
import { Title } from "../Title";

type Props = {
    name: string;
    children: ReactNode;
};

export const Section = ({name, children}: Props) => {
    return (
        <section className={styles.root}>
            <Title>
                {name}
            </Title>
            <div className={styles.content}>{children}</div>
        </section>
    );
};