import Head from 'next/head'
import Script from 'next/script' // 1. Impor komponen Script
import Content from './Content'
import Header from './Header'
import Footer from './Footer'
import BottomNavigation from './BottomNavigation'

export default function Layout({ children, name }) {
  const title = `Islamiah - ${name}`

  return (
    <div className="w-full mx-auto">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/Mushaf.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
      </Head>

      {/* 2. Tambahkan Script AdSense di sini */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7183187126446600" // GANTI DENGAN ID ANDA
        crossOrigin="anonymous"
        strategy="afterInteractive" // Memuat setelah halaman interaktif
      />

      <main className="text-slate-600">
        <Header />
        <Content>{children}</Content>
        <Footer />
        <BottomNavigation />
      </main>
    </div>
  )
}
