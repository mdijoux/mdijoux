import React, { ReactNode } from "react";
import styles from "./PrintPage.module.css";
import clsx from "clsx";
import { HeaderBullet } from "../icons";

export const PrintPage = ({contentClassName, children}: {contentClassName?: string, children?: ReactNode}) => {
    return (
        <section className={styles.root}>
            <header>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <div data-tour="start" className={styles.avatar}>
                    <img src="/memoji.png"  alt="photo de profile" />
                </div>
                <div className={styles.profile}>
                    <div className={styles.name}>Marc DIJOUX</div>
                    <div className={styles.job}>Lead Developer</div>
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