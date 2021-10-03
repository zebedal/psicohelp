import styles from '../styles/Coaching.module.css'
import Container from '../components/UI/Container'
import Image from 'next/image'
import { Fragment } from 'react'
import CoachingServices from '../components/coaching/CoachingServices'
import MarcarConsulta from '../components/MarcarConsulta'
import Head from 'next/head'

const Coaching = props => (
    
    <Fragment>
        <Head>
        <title>Psicohelp | Psicologia. Saúde. Recursos Humanos</title>
        <meta name="description" content="Serviço de psicologia clínica, psicoterapia e coaching. Orientação Escolar e Vocacional" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className={styles.wrapper}>
            <Image src="/assets/img/coaching.jpg" priority={true} layout="fill" objectFit="cover" alt="coaching barreiro" />
        </div>
        <Container padding={50}>
            <h2 className={styles.subTitle}><span>O que é o</span> Coaching</h2>
            <br /><br />
            <p>Existe atualmente alguma tendência para encarar o Coaching como uma questão de “moda”, contudo a sua utilização remonta há algumas centenas de anos atrás, nomeadamente em países como o Japão e a China, entre outros. A busca do desenvolvimento pessoal e do autoconhecimento, criaram uma relação estreita entre o Mestre (Coach) e os seus pupilos (Coachees), com o objetivo de melhorar competências, como por exemplo a auto confiança, a capacidade de comunicação, o trabalho de equipa, entre outras.</p>
            <br/>
            <p>O coaching pode assumir diversas variantes (life coaching, career coaching, executive coaching…), contudo o papel do Coach deverá pautar-se por ser o facilitador do processo, ajudando os seus coachees a desenvolverem as suas competências, com o objetivo de obterem uma melhoria continua, através do autodesenvolvimento.</p>
            <br />
            <p>O Coaching, tem por missão levar o Coachee, a alcançar um melhor conhecimento da sua pessoa, conduzindo a uma reflexão sobre aquilo que é necessário mudar, proporcionando o traçar de metas que levam a que essa mudança ocorra de um modo positivo.</p>
            <br/>
            <p>Tanto na vida pessoal, profissional, como nos desportos de alta competição, muitos Indivíduos e Organizações, já assumiram que o apoio de um Coach, constitui uma “mais-valia” para o ultrapassar de “obstáculos” e o alcançar de metas/objetivos.</p>
        </Container>


        <Container padding={50}>
            <h2 className={styles.subTitle}><span>Serviços</span> de Coaching</h2>
            <CoachingServices />
        </Container>

        <MarcarConsulta />

    </Fragment>
)

export default Coaching