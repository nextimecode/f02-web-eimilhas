import React from 'react'
import Head from 'next/head'
import Header from '../header'
import Footer from '../footer'
import { NavLinkProps } from '../../../types/types'
import { Box } from '@chakra-ui/react'
import NextWhatsIcon from '../../atoms/nextWhatsIcon'
import Link from 'next/link'

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

        <Box
          position="fixed"
          width="60px"
          height="60px"
          zIndex={100}
          bottom="20px"
          right="20px"
        >
          <Link href={'https://api.whatsapp.com/send?phone=5531996650233&text=Ol%C3%A1,%20Eimilhas!'}>
            <a target="_blank" rel="noreferrer">
              <NextWhatsIcon />
            </a>
          </Link>
        </Box>
      </div>
    </>
  )
}

export default PageTemplate
