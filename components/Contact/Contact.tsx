import React, { ReactNode } from "react";
import styles from "./Contact.module.css";

type Props = {
    icon: ReactNode;
    children: ReactNode;
};

export const Contact = ({ icon, children }: Props) => {
    return (
        <li className={styles.root}>
            {icon}
            <p className={styles.content}>{children}</p>
        </li>
    );
};