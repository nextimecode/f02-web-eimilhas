import React from 'react'
import BemVindo from '../components/organisms/bemvindo'
import Depoimentos from '../components/organisms/depoimentos'
import Encontre from '../components/organisms/encontre'
import Numeros from '../components/organisms/numeros'
import Promocoes from '../components/organisms/promocoes'
import PageTemplate from '../components/templates/pageTemplate'
import Section from '../components/templates/section'

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

export const whatsappUrl = 'https://api.whatsapp.com/send?phone=5537991222087' // whatsapp de teste

// export const whatsappUrl = 'https://api.whatsapp.com/send?phone=5531991464894'
export const instagramUrl = 'https://www.instagram.com/eimilhas/'

const formasPagamentoIconPath = 'assets/img/pagamentos'
const formasPagamento = [
  {
    card: {
      title: 'Boleto',
      imageIcon: `${formasPagamentoIconPath}/boleto.png`,
      subtitle: '5% OFF'
    }
  },
  {
    card: {
      title: 'PIX',
      imageIcon: `${formasPagamentoIconPath}/pix.png`,
      subtitle: '5% OFF'
    }
  },
  {
    card: {
      title: 'TED',
      imageIcon: `${formasPagamentoIconPath}/ted.png`,
      subtitle: '5% OFF'
      // ,listItems: [
      //     { item: { descricao: 'Bradesco' }},
      //     { item: { descricao: 'Banco do Brasil' }},
      //     { item: { descricao: 'Itaú' }},
      //     { item: { descricao: 'Santander' }},
      //     { item: { descricao: 'Caixa' }},
      //     { item: { descricao: 'Inter' }},
      //     { item: { descricao: 'Nubank' }},
      //     { item: { descricao: 'Picpay' }},
      //     { item: { descricao: 'Mercado Pago' }},
      //     { item: { descricao: 'Paypal' }},
      //     { item: { descricao: 'Wise' }}
      // ]
    }
  },
  {
    card: {
      title: 'Cartão',
      imageIcon: `${formasPagamentoIconPath}/cartao.png`,
      subtitle: 'em até 12x'
      // ,listItems: [
      //     {
      //         item: {
      //             descricao: '1 a 3 vezes',
      //             enfase: 'sem acréscimo'
      //         }
      //     },
      //     {
      //         item: {
      //             descricao: '4 a 6 vezes',
      //             enfase: '5% de acréscimo'
      //         }
      //     },
      //     {
      //         item: {
      //             descricao: '7 a 12 vezes',
      //             enfase: '10% de acréscimo'
      //         }
      //     }
      // ]
    }
  }
]

const pathLugares = 'assets/img/lugares/fotos'
const pathBandeiras = 'assets/img/lugares/bandeiras'

const promocoes = [
  {
    promocao: {
      foto: `${pathLugares}/rio.jpg`,
      bandeira: `${pathBandeiras}/user.png`,
      pais: 'Brasil',
      artigo: 'o',
      preco: 200,
      trecho: 'ida e volta'
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/rio.jpg`,
      bandeira: `${pathBandeiras}/user.png`,
      pais: 'EUA',
      artigo: 'os',
      preco: 1500,
      trecho: 'ida e volta'
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/rio.jpg`,
      bandeira: `${pathBandeiras}/user.png`,
      pais: 'Inglaterra',
      artigo: 'a',
      preco: 3000,
      trecho: 'ida e volta'
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/rio.jpg`,
      bandeira: `${pathBandeiras}/user.png`,
      pais: 'Itália',
      artigo: 'a',
      preco: 2000,
      trecho: 'ida e volta'
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/rio.jpg`,
      bandeira: `${pathBandeiras}/user.png`,
      pais: 'Austrália',
      artigo: 'a',
      preco: 5000,
      trecho: 'ida e volta'
    }
  }
]

const Index: React.FC = () => {
  return (
    <PageTemplate
      title="Home"
      menuLinks={listNavLinks}
    >

      <Section id="home">
        <Encontre/>
      </Section>

      <Section id="pagamento">
        <BemVindo formasPagamento={formasPagamento}/>
      </Section>

      <Section id="promocoes">
        <Promocoes promocoes={promocoes}/>
      </Section>

      <Section id="depoimentos">
        <Depoimentos/>
      </Section>

      <Section id="numeros">
        <Numeros/>
      </Section>

    </PageTemplate>
  )
}

export default Index
