import React from 'react'
import Head from 'next/head'
import Header from '../header'
import Footer from '../footer'
import { NavLinkProps } from '../../../types/types'

type Props = {
    children: unknown,
    menuLinks: Record<string, NavLinkProps>[]
}

const PageTemplate = ({
  children,
  menuLinks
}: Props) => {
  const urlLogo = 'assets/img/logos/logo_reduzida.png'

  return (
    <>
      <Head>
        <title>EiMilhas</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Saira:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div>
        <Header
          urlLogo={urlLogo}
          menuLinks={menuLinks}
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
