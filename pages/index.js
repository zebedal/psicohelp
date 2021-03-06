import Head from 'next/head'
import { Fragment } from 'react'
import Hero from '../components/homepage/Hero'
import Services from '../components/homepage/Services'
import QuemSomos from '../components/homepage/QuemSomos'
import Oferta from '../components/homepage/Oferta'
import Back from '../components/homepage/Back'
import Artigos from '../components/homepage/Artigos'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Psicohelp | Psicologia. Saúde. Recursos Humanos</title>
        <meta name="description" content="Serviço de psicologia clínica, psicoterapia e coaching. Orientação Escolar e Vocacional" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <Hero />
      <Services />
      <QuemSomos />
      <Oferta />
      <Back />
      <Artigos />


    </Fragment>
  )
}
