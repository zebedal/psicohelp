import styles from './Navigation.module.css'
import Link from 'next/link'
import ChevronDown from '../svg/ChevronDown'
import Facebook from '../svg/Facebook'
import Linkedin from '../svg/Linkedin'
import { useEffect, useRef } from 'react'

const Navigation = props => {

    const isMobile = useRef()

    useEffect(() => {
        isMobile.current = window.innerWidth < 550
    }, [])


    return (
        <div className={styles.wrapper}>
            <div className={`container ${styles.flex}`}>
                <nav className={styles.navigation}>
                    <Link href="/sobre">Sobre Nós</Link>
                    <Link href="/">
                        <div className={styles.navLink}>Serviços <ChevronDown />
                            <div className={styles.subMenu}>
                                <Link href="/avaliacao-psicologica">Avaliação Psicológica</Link>
                                <Link href="/coaching">Coaching</Link>
                                <Link href="/formacao">Formação</Link>
                            </div>
                        </div>
                    </Link>
                    <Link href="/contactos">Contactos</Link>
                </nav>
                <div className={styles.social}>
                    {!isMobile && <span>Siga-nos</span>}
                    <Facebook height={15} width={15} fill="var(--blue)" />&nbsp;&nbsp;&nbsp;
                    <Linkedin height={15} width={15} fill="var(--blue)" />
                </div>
            </div>
        </div>
    )
}



export default Navigation