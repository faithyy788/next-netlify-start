import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Faitee portfolio </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my world!" />
        <p className="description">
          I'm a Web developer<code>pages/A writer </code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
