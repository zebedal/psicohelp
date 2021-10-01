import styles from './Hero.module.css'
import Button from '../UI/Button'

const Hero = props => (
    <div className={styles.wrapper}>
        <img src="/assets/img/hero.jpg" layout="fill"  alt="clinica de psicologia"  />
        <div className={styles.content}>
            <p>Somos uma clínica privada de terapia</p>
            <h2><span>A confiança</span> de fazer a diferença</h2>
            <br/>
            <br />
            <div className={styles.flex}>
                <Button text="Sobre nós" />
                <Button text="Marcar" background="var(--grey)" textColor="var(--text-color)"/>
            </div>
        </div>
    </div>
)

export default Hero