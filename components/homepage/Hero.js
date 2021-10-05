import styles from './Hero.module.css'
import Button from '../UI/Button'
import Container from '../UI/Container'
import Image from 'next/image'

const Hero = props => (
    <div className={styles.wrapper}>
        <Image src="/assets/img/hero2.jpg" layout="fill" objectFit="cover"  alt="clinica de psicologia" />
        <div className={styles.innerContainer}>

            <div className={styles.content}>
                <p>Somos uma clínica privada de terapia</p>
                <h2><span>A promover</span> a saúde mental</h2>
                <br />
                <br />
                <div className={styles.flex}>
                    <Button text="Sobre nós" route="/sobre"/>
                    <Button text="Marcar" background="var(--grey)" textColor="var(--text-color)" route="/contactos"/>
                </div>
            </div>
            
        </div>
    </div>
)

export default Hero