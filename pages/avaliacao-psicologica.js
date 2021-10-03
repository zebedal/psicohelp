import styles from '../styles/Avaliacao.module.css'
import Container from '../components/UI/Container'
import Head from 'next/head'
import { Fragment } from 'react'
import Image from 'next/image'
import MarcarConsulta from '../components/MarcarConsulta'
import FerramentasAvaliacao from '../components/avaliacao/FerramentasAvaliacao'
import Oferta from '../components/homepage/Oferta'

const Avaliacao = props => (
    <Fragment>
        <Head>
            <title>Psicohelp | Psicologia. Saúde. Recursos Humanos</title>
            <meta name="description" content="Serviço de psicologia clínica, psicoterapia e coaching. Orientação Escolar e Vocacional" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.wrapper}>
            <Image src="/assets/img/avaliacao/avaliacao.jpg" priority={true}  loading="eager" layout="fill" objectFit="cover" alt="coaching barreiro" />
        </div>


        <Container paddingTopBottom={50}>
            <h2 className={styles.subTitle}><span>Avaliação</span> Psicológica</h2>
            <br /><br />
            <p>A avaliação psicológica tem como objetivo obter informações importantes sobre funcionamento cognitivo-intelectual, social e emocional de um indivíduo, para desse modo permitir uma melhor compreensão sobre o mesmo e determinar um plano de intervenção que poderá passar pelo tratamento, recorrendo à psicologia clínica e/ou psicoterapia. </p>
            <br />
            <p>Nalgumas situações, os resultados obtidos ao nível da avaliação psicológica, poderão fazer emergir a necessidade do envolvimento de outros intervenientes (cônjuge, pais, filhos, professores, outros) no processo terapêutico, originado a necessidade de recorrer por exemplo à terapia de casal e/ou familiar. </p>
            <br />
            <p>A avaliação psicológica, é também utilizada para situações relacionadas com pedidos de baixa médica, reformas antecipadas, entre outros. Na Psicohelp, utilizamos ferramentas de avaliação, testadas a nível internacional, mas validadas e aferidas para a população portuguesa</p>
        </Container>


        <div style={{ background: 'var(--grey)' }}>
            <Container paddingTopBottom={30}>
                <h2 className={styles.subTitle}><span>Ferramentas</span> de Avaliação</h2>
                <FerramentasAvaliacao />
            </Container>
        </div>
        <MarcarConsulta />
        <Oferta background="white"/>

    </Fragment>
)


export default Avaliacao