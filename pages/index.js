import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import dynamic from 'next/dynamic'

const DynamicHeader = dynamic(() => import('../components/header'), {
  ssr: false,
})
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>GetSorted!</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <main>
   <html>index.html</html>
      </main>
    </div>
  )
}
