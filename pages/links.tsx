import type { NextPage } from 'next'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Perfect Bite - Brigadeiros</title>
        <meta name="description" content="Brigadeiro artesanal de chocolate." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="m-4 flex items-center justify-center">
        <main className="">
          <header className="mb-16">
            <Image
              src="/perfect-bite-slogan.svg"
              alt="Perfect Bite"
              width={360}
              height={68}
            />
          </header>

          <nav className="grid gap-8">
            <a
              className="border-2 border-gray-800 rounded p-3 text-gray-800 font-bold text-center"
              href="https://perfectbite.nl"
            >
              Website
            </a>
            <a
              className="border-2 border-gray-800 rounded p-3 text-gray-800 font-bold text-center"
              href="https://instagram.com/perfectbite.nl"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              className="border-2 border-gray-800 rounded p-3 text-gray-800 font-bold text-center"
              href="https://wa.me/31618717480"
              target="_blank"
              title="whatsapp"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </nav>
        </main>
      </div>
    </>
  )
}

export default Home
