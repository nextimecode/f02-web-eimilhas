import React from 'react'
import Separator from '../../atoms/separator'
import FooterOwners from '../../organisms/footerOwners'
import FooterMenu from '../../organisms/footerMenu'

type Props = {
    urlLogo: string
}

const Footer = ({
  urlLogo
}: Props) => {
  return (
    <div>
      <FooterMenu
        urlLogo={urlLogo}
      />
      <Separator/>
      <FooterOwners />
    </div>
  )
}

export default Footer
