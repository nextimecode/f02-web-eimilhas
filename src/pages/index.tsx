import React from 'react'
import Head from 'next/head'

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap" rel="stylesheet"/>
      </Head>
      <div>
        <h1>Hello</h1>
      </div>
    </>
  )
}

export default Index
