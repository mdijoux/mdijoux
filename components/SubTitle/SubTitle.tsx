import React, { ComponentPropsWithoutRef } from "react";

import styles from "./SubTitle.module.css";
import clsx from "clsx";

export function SubTitle({className, children, ...props}: ComponentPropsWithoutRef<"h1">) {
    return (<h2 className={clsx(styles.root, className)} {...props}>
        {children}
    </h2>);
}