
import Logo from '../svg/Logo'
import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = props => (
    <div className={styles.outerWrapper}>
        <div className={`container `}>
            <div className={styles.grid}>
                <div className={styles.footerColumn}>
                    <Logo />
                    <p>Aliqua sit velit labore laboris dolor aute et occaecat.</p>
                </div>

                <div className={styles.footerColumn}>
                    <h5>A nossa clinica</h5>
                    <p>Rua Vasco da Gama, nº41 G 2830-365 Barreiro</p>
                    <p>218 092 368</p>
                    <p>932 736 037</p>
                    <p>Todos os dias das <strong>09:00</strong> às <strong>18:00</strong></p>
                </div>

                <div className={styles.footerColumn}>
                    <h5>Artigos</h5>
                    <p><a className={styles.articleTitle} href="https://www.distritonline.pt/a-ansiedade-normalidade-ou-patologia%ef%bb%bf/">A Ansiedade: normalidade ou patologia?</a></p>
                    <p className={styles.articleDate}>Dezembro 05, 2019</p>
                    <br />
                    <p><a className={styles.articleTitle} href="https://www.distritonline.pt/perturbacoes-ao-nivel-do-apetite-a-anorexia-nervosa-e-a-bulimia/">Perturbações ao nível do apetite</a></p>
                    <p className={styles.articleDate}>Março 08, 2019</p>
                </div>

                <div className={`${styles.footerColumn} ${styles.linksWrapper}`}>
                    <h5>Links Rápidos</h5>
                    <Link href="/">Home</Link>
                    <Link href="/sobre">Sobre Nós</Link>
                    <Link href="/avaliacao-psicologica">Avaliação Psicológica</Link>
                    <Link href="/coaching">Coaching</Link>
                    <Link href="/formacao">Formação</Link>
                    <Link href="/contactos">Contactos</Link>
                </div>
            </div>
        </div>
    </div>
)

export default Footer