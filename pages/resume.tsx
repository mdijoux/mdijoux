import type { NextPage } from 'next'
import Head from 'next/head'
import { Contact } from '../components/Contact'
import { Experience } from '../components/Experience'
import { Github, LinkedIn, Mail, Phone } from '../components/icons'
import { Layout } from '../components/Layout'
import { Profile } from '../components/Profile'
import { Section } from '../components/Section'
import { Skill } from '../components/Skill'
import { Training } from '../components/Training'
import styles from '../styles/Resume.module.css'

const Resume: NextPage = () => {
    return (
        <>
            <Head>
                <title>Marc DIJOUX - CV</title>
                <meta name="description" content="Voici le CV de Marc DIJOUX" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout contentClassName={styles.resume}>
                    <aside>
                        <Section name="Contact">
                            <ul className={styles.contacts}>
                                <Contact icon={<Mail />}>marc.dijoux@me.com</Contact>
                                <Contact icon={<Phone />}>0 692 44 71 63</Contact>
                                <Contact icon={<LinkedIn />}><a href="https://linkedin.com/in/mdijoux">linkedin.com/in/mdijoux</a></Contact>
                                <Contact icon={<Github />}><a href="https://github.com/mdijoux">github.com/mdijoux</a></Contact>
                            </ul>
                        </Section>
                        <Section name="Compétences">
                            <h2>Languages</h2>
                            <ul className={styles.skills}>
                                <Skill name="Javascript" rate={5} />
                                <Skill name="HTML/CSS" rate={5} />
                                <Skill name="PHP" rate={4} />
                                <Skill name="SQL" rate={4} />
                            </ul>
                            <h2>Technologies</h2>
                            <ul className={styles.skills}>
                                <Skill name="ReactJS" rate={5} />
                                <Skill name="GraphQL/Apollo" rate={4} />
                                <Skill name="NodeJS" rate={5} />
                                <Skill name="Cypress" rate={5} />
                            </ul>
                            <ul className={styles.tags}>
                                <li>Agile</li>
                                <li>Git</li>
                                <li>Tensorflow</li>
                                <li>Docker</li>
                                <li>Kubernetes</li>
                                <li>Testing</li>
                                <li>CI/CD</li>
                                <li>DevOps</li>
                                <li>GitOps</li>
                                <li>DX</li>
                                <li>UX</li>
                            </ul>
                        </Section>
                        <Section name="Langues">
                            <ul className={styles.languages}>
                                <li>Français</li>
                                <li>Anglais (TOEIC: 910pts)</li>
                                <li>Allemand</li>
                            </ul>
                        </Section>
                        <Section name="Autre">
                            <ul className={styles.other}>
                                <li>Titulaire du permis B</li>
                                <li><a href="https://oqs.li/XVU9JP">Certification Opquast Expert (935pts)</a></li>
                            </ul>
                        </Section>
                    </aside>
                    <div className={styles.content}>
                        <Section name='Expérience professionelle'>
                            <ul className={styles.experiences}>
                                <Experience
                                    place='Simplon.Prod'
                                    period="2019 - aujourd'hui"
                                    name='Lead developer'>
                                    Intégration du projet <b>Simplonline</b> en tant que &quot;Lead developer front&quot; au sein d&apos;une
                                    équipe agile SCRUM. J&apos;ai au developement et à la maintenance de la plateforme
                                    pédagogique <b>Simplon</b> (environ 2279 comptes actifs répartis entre 91 promos). J&apos;y encadre
                                    une equipe de développeurs front (2 à 4 membres).
                                </Experience>
                                <Experience
                                    place='Simplon'
                                    period="2018 - 2019"
                                    name='Développeur web'>
                                    Création et maintenance d&apos;applications web (ex: Chatbot facebook,
                                    logiciel de gestion de pannes, Machine learning pour page
                                    facebook, Site web drupal, Plateforme de formation, ...).
                                </Experience>
                                <Experience
                                    place="Vanahé"
                                    period="2015 - 2018"
                                    name="Développeur web">
                                    Mise en place et maintenance d’une solution e-commerce déstiné à
                                    la vente de vols, hotels et autres. Intégration de l’entreprise en
                                    tant qu’associé.
                                </Experience>
                                <Experience
                                    place="Noxu"
                                    period="2014 - 2015"
                                    name="Développeur web">
                                    Freelance en développement informatique en tant
                                    qu’auto-entrepreneur.
                                </Experience>
                                <Experience
                                    place="Orange"
                                    period="2012"
                                    name="Développeur web">
                                    Stage à la DSI (Direction du Service d’Information). Développement
                                    d’un outil de supervision applicatif web dans le but d’améliorer
                                    la réactivité du service face aux pannes.
                                </Experience>
                            </ul>
                        </Section>
                        <Section name='Formation'>
                            <ul className={styles.curriculum}>
                                <Training
                                    name="L3 Informatique"
                                    period="2012 - 2014"
                                    institution="Université de la Réunion"
                                    location="St Denis, Réunion"
                                />
                                <Training
                                    name="DUT Réseaux &amp; Télécommunication"
                                    period="2011 - 2012"
                                    institution="IUT de St Pierre"
                                    location="St Denis, Réunion"
                                />
                                <Training
                                    name="Prépa. Ingé. Informatique"
                                    period="2009 - 2011"
                                    institution="EPITA"
                                    location="Paris, France"
                                />
                            </ul>
                        </Section>
                    </div>
            </Layout>

        </>
    )
}

export default Resume
