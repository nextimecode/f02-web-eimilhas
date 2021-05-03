import React from 'react'
import { Container } from 'react-bootstrap'

import { instagramUrl } from '../../../pages/index'
import Subtitle from '../../atoms/subtitle'

type Props = {
    urlLogo: string
}

const FooterMenu = ({
  urlLogo
}: Props) => {
  return (
    <Container className="bg-blue text-white font-primary p-4" fluid={true}>
      <div className="row">
        <div className="col-sm-12 col-md-6 p-2 m-auto text-center">
          <div className="">
            <a href="#home">
              <img
                src={urlLogo}
                className="w-50"
              />
            </a>
          </div>
          <div>
            <p className="mt-3">
            Acesse nosso Instagram e acompanhe
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 m-auto text-center">
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            <img src="assets/img/logos/instagram.png" className="qrcode m-auto mx-1"/>
          </a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            <img src="assets/img/qr-code.png" className="qrcode bg-white p-3 m-auto mx-1"/>
          </a>
          <div className="mt-2">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Subtitle label="@eimilhas" color="white"/>
            </a>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default FooterMenu
