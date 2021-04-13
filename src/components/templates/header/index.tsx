import React from 'react'
import { NavLinkProps } from '../../../types/types'
import Menu from '../../molecules/menu'

type Props = {
    urlLogo: string,
    menuLinks: Record<string, NavLinkProps>[]
}

const Header = ({
  urlLogo,
  menuLinks
}: Props) => {
  return (
    <header id="home">
      <Menu
        urlLogo={urlLogo}
        listNavLinks={menuLinks}
      />
    </header>
  )
}

export default Header
