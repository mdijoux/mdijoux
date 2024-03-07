import React, { ComponentPropsWithoutRef } from "react";

import styles from "./Title.module.css";
import clsx from "clsx";

import { HeaderBullet } from "../icons";

export function Title({className, children, ...props}: ComponentPropsWithoutRef<"h1">) {
    return (<h1 className={clsx(styles.root, className)} {...props}>
        <HeaderBullet className={styles.bullet} />
        {children}
    </h1>);
}