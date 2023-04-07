import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>GetSorted!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
     <code>index.html</code>
      </main>

      <Footer />
    </div>
  )
}
