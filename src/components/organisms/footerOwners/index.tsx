import React from 'react'
import { Container } from 'react-bootstrap'
import NextimeSvg from '../../atoms/iconsSvg/nextimeSvg'

const FooterOwners = () => {
  return (
    <Container className="bg-red text-white font-primary py-2" fluid={true}>
      <div className="row">

        <div className="col-6 text-center py-2">
          Copyright © {new Date().getFullYear()} | EiMilhas
        </div>
        <div className="col-6 text-center py-2">
          Desenvolvido por&nbsp;
          <a href="https://nextime.com.br">
            <NextimeSvg size={1.5}/>
          </a>
          <div style={{ display: 'none' }}>Desenvolvedor: <a href="https://github.com/marcuslamounier">Marcus Lamounier</a></div>
        </div>
      </div>
    </Container>
  )
}

export default FooterOwners
