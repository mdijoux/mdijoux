import type { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from '../components/Layout'
import { Skill } from '../components/Skill'
import styles from '../styles/CoverLetter.module.css'

const CoverLetter: NextPage = () => {
    return (
        <>
            <Head>
                <title>Marc DIJOUX - Lettre de motivation</title>
                <meta name="description" content="Voici la lettre de motivation de Marc DIJOUX" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout contentClassName={styles.coverletter}>
                <h1>Lettre de motivation</h1>
                <p>Madame, Monsieur</p>
                <p>
                    Je suis intéréssé par l&apos;offre de développeur web au sein de votre entreprise
                    car elle correspond parfaitement à mes aspirations.
                </p>

                <p>
                    Diplomé en 2014, je suis titulaire d&apos;une licence en informatique ainsi que
                    d&apos;un DUT en réseaux et télécommunications. J&apos;ai notament étudié les bonnes
                    pratiques et les architectures relatives au développement web. Disponible, passionné
                    et sociable, j&apos;aime m&apos;impliquer et apprendre avec des situations concrètes.
                </p>

                <p>
                    Fort de mon expérience d&apos;entreprenariat, je comprends les enjeux d&apos;une entreprise.
                    Ainsi, grâce à mon dernier projet d&apos;agence de voyage (Vanahé) j&apos;ai acquis les
                    compétences et l&apos;expérience nécessaire à la mise en place de solutions complexes
                    (Authentification unique, Monitoring, Microservices, ...) en temps imparti.
                </p>

                <p>
                    Passionné par les nouvelles technologies de l&apos;information, je mène une veille technologique
                    perpétuelle afin de pouvoir prendre les bonnes décisions techniques et être force de propositions
                    éclairées.
                </p>

                <p>
                    Je reste à votre entière disposition pour fournir des informations supplémentaires si vous le
                    désirez.
                </p>

                <p>Cordialement,<br /> Marc DIJOUX</p>
            </Layout>

        </>
    )
}

export default CoverLetter
