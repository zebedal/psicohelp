import styles from './Hero.module.css'
import Button from '../UI/Button'
import Container from '../UI/Container'

const Hero = props => (
    <div className={styles.wrapper}>
        <img src="/assets/img/hero.jpg" layout="fill" alt="clinica de psicologia" />
        <div className={styles.innerContainer}>

            <div className={styles.content}>
                <p>Somos uma clínica privada de terapia</p>
                <h2><span>A promover</span> a saúde mental</h2>
                <br />
                <br />
                <div className={styles.flex}>
                    <Button text="Sobre nós" />
                    <Button text="Marcar" background="var(--grey)" textColor="var(--text-color)" />
                </div>
            </div>
            
        </div>
    </div>
)

export default Hero