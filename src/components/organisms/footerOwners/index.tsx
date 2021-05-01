import React from 'react'
import { Container } from 'react-bootstrap'

const FooterOwners = () => {
  return (
    <Container className="bg-red text-white font-primary py-2" fluid={true}>
      <div className="row">

        <div className="col-6 text-center py-2">
          Copyright © {new Date().getFullYear()} | EiMilhas
        </div>
        <div className="col-6 text-center py-2">
          Developed by&nbsp;
          <a href="https://nextime.com.br">
            NeXTIME
          </a>
          <div style={{ display: 'none' }}>Desenvolvedor: <a href="https://github.com/marcuslamounier">Marcus Lamounier</a></div>
        </div>
      </div>
    </Container>
  )
}

export default FooterOwners
