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
     window.location.assign("/index.html")
      </main>

      <Footer />
    </div>
  )
}
