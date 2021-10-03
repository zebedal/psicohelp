import styles from './Oferta.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Oferta = ({background='var(--grey)'}) => (
    <div className={styles.wrapper} style={{background: background }}>
        <div className="container">
            <strong>O que oferecemos</strong>
            <h2>Terapias <span>e Tratamentos</span></h2>
            <div className={styles.flex}>

                <div className={styles.card}>
                    <div className={styles.imgWrapper}>
                        <Image src="/assets/img/casais.jpg" layout="fill" objectFit="cover" alt="terapia de casais barreiro" />
                    </div>
                    <br />
                    <h4>Terapia de casais</h4>
                    <p>Uma forma de tratamento na qual o casal interage com o terapeuta</p>
                    <br />
                    <div className={styles.linkFlex}>
                        <Link href="/avaliacao-psicologica">Saber mais</Link>&nbsp;&nbsp;
                        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.08957 0L0.910431 1.17918L4.73125 5L0.910431 8.82082L2.08957 10L7.08957 5L2.08957 0Z" fill="var(--blue)" />
                        </svg>



                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.imgWrapper}>
                        <Image src="/assets/img/ansiedade.jpg" layout="fill" objectFit="cover" alt="terapia de casais barreiro" />
                    </div>
                    <br />
                    <h4>Distúrbio de Ansiedade</h4>
                    <p>Ansiedade por ser um problema sério com sequelas a longo prazo</p>
                    <br />
                    <div className={styles.linkFlex}>
                        <Link href="/avaliacao-psicologica">Saber mais</Link>&nbsp;&nbsp;
                        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.08957 0L0.910431 1.17918L4.73125 5L0.910431 8.82082L2.08957 10L7.08957 5L2.08957 0Z" fill="var(--blue)" />
                        </svg>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.imgWrapper}>
                        <Image src="/assets/img/depressao.jpg" layout="fill" objectFit="cover" alt="terapia de casais barreiro" />
                    </div>
                    <br />
                    <h4>Depressão</h4>
                    <p>Uma forma de tratamento na qual o casal interage com o terapeuta</p>
                    <br />
                    <div className={styles.linkFlex}>
                        <Link href="/avaliacao-psicologica">Saber mais</Link>&nbsp;&nbsp;
                        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.08957 0L0.910431 1.17918L4.73125 5L0.910431 8.82082L2.08957 10L7.08957 5L2.08957 0Z" fill="var(--blue)" />
                        </svg>
                    </div>
                </div>




            </div>
        </div>
    </div>
)

export default Oferta