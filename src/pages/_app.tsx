import React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import '../styles/global.scss'

import { defaultTheme } from '../theme/'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
