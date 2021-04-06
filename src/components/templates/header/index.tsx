import React from 'react'
import Menu from '../../molecules/menu'

type Props = {
    urlLogo: string
}

const Header = ({
  urlLogo
}: Props) => {
  const listNavLinks = [
    {
      navLink: {
        href: '#home',
        label: 'Home'
      }
    },
    {
      navLink: {
        href: '#pagamento',
        label: 'Pagamento'
      }
    },
    {
      navLink: {
        href: '#promocoes',
        label: 'Promoções'
      }
    },
    {
      navLink: {
        href: '#',
        label: 'A Empresa',
        items: [
          {
            navLink: {
              href: '#depoimentos',
              label: 'O que os clientes dizem?'
            }
          },
          {
            navLink: {
              href: '#numeros',
              label: 'Números da Empresa'
            }
          }
        ]
      }
    }
  ]

  return (
    <header id="home">
      <Menu
        urlLogo={urlLogo}
        listNavLinks={listNavLinks}
      />
    </header>
  )
}

export default Header
