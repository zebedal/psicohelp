import styles from './Header.module.css'
import Location from '../svg/Location'
import Email from '../svg/Email'
import Logo from '../svg/Logo'
import Button from '../UI/Button'
import Navigation from './Navigation'
import { Fragment } from 'react'


const Header = props => (
    <Fragment>
        <header className={styles.Header}>

            <div className={styles.topContacts}>
                <div className={`container ${styles.flex}`}>
                    <span>Todos os dias entre as 09:00 e as 18:00</span>
                    <div >
                        <span ><Location /> Rua Vasco da Gama 41G, Barreiro</span>
                        <span><Email /> psi@psicohelp.pt</span>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>

            <div className={`container ${styles.flex}`}>
                <Logo />
                <div >
                    <div className={styles.telefone}><span>Ligar:</span><span>&nbsp;932 736 037</span></div>
                    <Button text="Marcar Consulta" route="/contactos"/>
                </div>
            </div>

            <div className="divider"></div>
            
        </header>
        
        <Navigation />
        
    </Fragment>
)

export default Header