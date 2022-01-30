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
          I'm a Web developer<code>A Computer Science graduate from Bowen university</code>
        </p>
<h2>Web Designer and Developer</h2>
<p><strong>Services</strong>
<h3>Web Design </h3>
<h3>Web Development</h3>
<h3>Project Management </h3>
<h3>Writer</h3>
</p>

<h3>My portfolio: </h3>

<h3>Stay in touch </h3>
<a href="https://linktr.ee/FaithAdeniji"></a>

      </main>

      <Footer />
    </div>
  )
}
