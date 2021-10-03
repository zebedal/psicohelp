import styles from './Navigation.module.css'
import Link from 'next/link'
import ChevronDown from '../svg/ChevronDown'

const Navigation = props => (
    <div className={styles.wrapper}>
        <div className="container">
            <nav className={styles.navigation}>
                <Link href="/sobre">Sobre Nós</Link>
                <Link href="/">
                    <div className={styles.navLink}>Serviços <ChevronDown />
                        <div className={styles.subMenu}>
                            <Link href="/">Avaliação Psicológica</Link>
                            <Link href="/coaching">Coaching</Link>
                            <Link href="/">Formação</Link>
                        </div>
                    </div>
                </Link>
                <Link href="/">Contactos</Link>
            </nav>
        </div>
    </div>
)

export default Navigation