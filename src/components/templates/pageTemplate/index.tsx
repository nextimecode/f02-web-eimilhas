import React from 'react'
import Head from 'next/head'
import Header from '../header'
import Footer from '../footer'
import Separator from '../../atoms/separator'

type Props = {
    children: unknown,
    title: string
}

const PageTemplate = ({
  children,
  title
}: Props) => {
  const urlLogo = 'assets/img/logos/logo_reduzida.png'

  return (
    <>
      <Head>
        <title>{`EiMilhas - ${title}`}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Saira:wght@400;500;700&display=swap"
          // href="https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div>
        <Header
          urlLogo={urlLogo}
        />

        <main>
          {children}
        </main>

        <footer>
          <Footer
            urlLogo={urlLogo}
          />
        </footer>
      </div>
    </>
  )
}

export default PageTemplate
