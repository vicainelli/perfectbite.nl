import type { NextPage } from 'next'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import { Header } from '../components/Header'
import { Flavors } from '../components/sections/Flavors'
import { BoxSets } from '../components/sections/BoxSets'

const Home: NextPage = () => {
  const { t, lang } = useTranslation('common')

  return (
    <div>
      <Head>
        <title>Perfect Bite - Brigadeiros</title>
        <meta name="description" content="Brigadeiro artesanal de chocolate." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="mx-auto mt-12 sm:max-w-2xl md:max-w-3xl">
        <BoxSets />
        <Flavors />
        <section className='mb-20'>
          <div className="my-8 rounded bg-blue-200 p-2">
            <p className="text-center text-sm">
              {t('common:disclaimer')}
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
