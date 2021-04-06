import React from 'react'
import { Container } from 'react-bootstrap'

import './style.scss'
type Props = {
    urlLogo: string
}

const FooterMenu = ({
  urlLogo
}: Props) => {
  return (
    <Container className="footer-menu p-4" fluid={true}>
      <div className="row">
        <div className="col-sm-12 col-md-6 p-2">
          <div className="text-center">
            <img
              src={urlLogo}
              className="w-50"
            />
          </div>
          <div>
            <p className="text-justify mt-3">
                            O EiMilhas é um site que Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus orci eget lacus molestie vehicula. Mauris fringilla tristique enim, sed interdum felis molestie non. Nam ullamcorper tristique augue, luctus tempus metus commodo quis. Donec mattis ipsum et tellus pulvinar tristique. Maecenas at ipsum diam
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 text-center">
          <p>Acesse nosso Instagram @eimilhas e acompanhe!</p>
          <img src="assets/img/logos/instagram.png" className="qrcode m-auto mx-1"/>
          <img src="assets/img/qr-code.png" className="qrcode bg-white p-2 m-auto mx-1"/>
        </div>
      </div>
    </Container>
  )
}

export default FooterMenu
