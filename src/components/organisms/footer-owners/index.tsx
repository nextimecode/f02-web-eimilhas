import React from 'react'
import { Container } from 'react-bootstrap'

import './style.scss'

const FooterOwners = () => {
  return (
    <Container className="footer-owners py-2" fluid={true}>
      <div className="row">

        <div className="col-6 text-center py-2">
                    Copyright © {new Date().getFullYear()} | EiMilhas
        </div>
        <div className="col-6 text-center py-2">
                    Developed by&nbsp;
          <a href="https://nextime.com.br">
                        NeXTIME
          </a>
        </div>
      </div>
    </Container>
  )
}

export default FooterOwners
