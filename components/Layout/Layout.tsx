import React, { ReactNode } from "react";
import styles from "./Layout.module.css";
import clsx from "clsx";

export const Layout = ({contentClassName, children}: {contentClassName?: string, children: ReactNode}) => {
    return (
        <main className={styles.main}>
            <header>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/avatar.jpg" className={styles.avatar} alt="photo de profile" />
                <div className={styles.profile}>
                    <div className={styles.name}>Marc DIJOUX</div>
                    <div className={styles.job}>Lead Developer</div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.image} src="/header-logo.svg" alt="" />
            </header>
            <div className={clsx(styles.content, contentClassName)}>
                {children}
            </div>
            <footer />
        </main>
    );
}