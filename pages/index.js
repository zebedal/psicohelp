import Head from 'next/head'
import { Fragment } from 'react'
import styles from '../styles/Homepage.module.css'
import Image from 'next/image'
import Hero from '../components/homepage/Hero'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Psicohelp | Psicologia. Saúde. Recursos Humanos</title>
        <meta name="description" content="Serviço de psicologia clínica, psicoterapia e coaching. Orientação Escolar e Vocacional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <div style={{height:'80vh'}}></div>

    </Fragment>
  )
}
