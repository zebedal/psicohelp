
import Logo from '../svg/Logo'
import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = props => (
    <div className="container-flex">

        <div className={styles.footerColumn}>
            <Logo />
            <p>Aliqua sit velit labore laboris dolor aute et occaecat aliqua duis consequat eiusmod laborum. Laborum consectetur ex fugiat mollit.</p>
        </div>

        <div className={styles.footerColumn}>
            <h5>A nossa clinica</h5>
            <address>Rua Vasco da Gama, nº41 G 2830-365 Barreiro</address>
            <p>218 092 368</p>
            <p>932 736 037</p>
            <p>Todos os dias das 09:00 às 18:00</p>
        </div>

        <div className={styles.footerColumn}>
            <h5>Artigos</h5>
            <p className={styles.articleTitle}><a href="#">Título Artigo</a></p>
            <p className={styles.articleDate}>Fevereiro 19, 2021</p>
            <br/>
            <p className={styles.articleTitle}><a href="#">Título Artigo</a></p>
            <p className={styles.articleDate}>Abril 22, 2021</p>
        </div>

        <div className={styles.footerColumn}>
            <h5>Links Rápidos</h5>
            <Link href="/">Home</Link>
            <Link href="/">Sobre Nós</Link>
            <Link href="/">Psicologia</Link>
            <Link href="/">Coaching</Link>
        </div>

    </div>
)

export default Footer