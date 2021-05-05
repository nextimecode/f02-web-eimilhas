import React from 'react'
import { Container } from 'react-bootstrap'

import { instagramUrl, whatsappUrl, emailUrl, facebookUrl } from '../../../pages/index'

type Props = {
    urlLogo: string
}

const FooterMenu = ({
  urlLogo
}: Props) => {
  return (
    <Container className="bg-blue text-white font-primary py-4" fluid={true}>
      <div className="row">
        <div className="col-sm-12 col-md-6 m-auto text-center">
          <a href="#home">
            <img
              src={urlLogo}
              className="w-75"
            />
          </a>
        </div>
        <div className="col-sm-12 col-md-6 m-auto text-center my-4">
          <p>Entre em contato conosco!</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <img src="assets/img/logos/whatsapp.png" className="contato p-3 m-auto mx-1"/>
          </a>
          <a href={emailUrl} target="_blank" rel="noreferrer">
            <img src="assets/img/logos/gmail.png" className="contato p-3 m-auto mx-1"/>
          </a>
          <a href={facebookUrl} target="_blank" rel="noreferrer">
            <img src="assets/img/logos/facebook.png" className="contato p-3 m-auto mx-1"/>
          </a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            <img src="assets/img/logos/instagram.png" className="contato p-3 m-auto mx-1"/>
          </a>
        </div>
      </div>
    </Container>
  )
}

export default FooterMenu
