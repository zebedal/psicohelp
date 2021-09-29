import styles from './Hero.module.css'
import Image from 'next/image'

const Hero = props => (
    <div className={styles.wrapper}>
            <Image src="/assets/img/hero.jpg" layout="fill"  alt="clinica de psicologia"/>

    </div>
)

export default Hero