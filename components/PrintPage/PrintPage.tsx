import React, { ReactNode } from "react";
import NextImage from "next/image"
import clsx from "clsx";

import styles from "./PrintPage.module.css";
import { HeaderBullet } from "../icons";

export const PrintPage = ({contentClassName, children}: {contentClassName?: string, children?: ReactNode}) => {
    return (
        <section className={styles.root}>
            <header>
                <div className={styles.avatar}>
                    <NextImage width={120} height={120} src="/memoji.png"  alt="Memoji Apple de Marc DIJOUX" />
                </div>
                <div aria-hidden="true" className={styles.hand}>👋🏻</div>
                <div className={styles.profile}>
                    <div className={styles.name}>Marc DIJOUX</div>
                    <div className={styles.job}>Développeur web</div>
                </div>
                <HeaderBullet className={styles.bullet} />
            </header>
            <div className={clsx(styles.content, contentClassName)}>
                {children}
            </div>
            <footer />
        </section>
    );
}