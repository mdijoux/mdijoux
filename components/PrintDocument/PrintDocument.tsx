import React, { ReactNode } from "react";
import styles from "./PrintDocument.module.css";

export const PrintDocument = ({children}: {children: ReactNode}) => {
    return (
        <main className={styles.root}>
            {children}
        </main>
    );
};