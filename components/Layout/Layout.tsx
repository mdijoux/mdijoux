import React, { ReactNode } from "react";
import styles from "./Layout.module.css";
import clsx from "clsx";
import { HeaderBullet } from "../icons";

export const Layout = ({contentClassName, children}: {contentClassName?: string, children: ReactNode}) => {
    return (
        <main className={styles.main}>
            <header>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/memoji.png" className={styles.avatar} alt="photo de profile" />
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
        </main>
    );
}