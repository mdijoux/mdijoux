import React from "react";
import styles from "./Profile.module.css";

export const Profile = () => {
    return (
        <section className={styles.root}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/avatar.jpg" className={styles.avatar} alt="photo de profile" />
            <div>
                <h1>Profil</h1>
                <p>
                    Diplômé d&apos;une licence en informatique, je m’intéresse à la
                    technologie depuis mes 9 ans. J’ai un intérêt tout particulier pour
                    les technologies du web et les protocoles de communication. J’aime
                    le travail en équipe et j&apos;adore les objets connectés.
                </p>
            </div>
        </section>
    )
}