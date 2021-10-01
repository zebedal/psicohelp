import styles from './Back.module.css'
import Image from 'next/image'
import back from '../../public/assets/img/back.jpg'
import Calendar from '../svg/Calendar'
import Therapy from '../svg/Therapy'

const Back = props => (
    <div className={styles.wrapper}>
        <Image src={back} layout="fill" objectFit="cover" alt="coaching"/>
        <div className={`container ${styles.flex}`}>

            <div className={styles.box}>
                <Calendar />
                <div>20+</div>
                <p>Anos de experiência</p>
            </div>

            <div className={styles.box}>
                <Therapy />
                <div>10+</div>
                <p>Várias especialidades</p>
            </div>



        </div>
    </div>
)

export default Back