import React from 'react'
import Subtitle from '../../atoms/subtitle'
import Title from '../../atoms/title'
import Cards from '../cards'

const pathIcons = 'assets/img/pagamentos'
const cards = [
  {
    card: {
      title: 'Boleto',
      imageIcon: `${pathIcons}/boleto.png`,
      subtitle: '5% OFF'
    }
  },
  {
    card: {
      title: 'PIX',
      imageIcon: `${pathIcons}/pix.png`,
      subtitle: '5% OFF'
    }
  },
  {
    card: {
      title: 'TED',
      imageIcon: `${pathIcons}/ted.png`,
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
      imageIcon: `${pathIcons}/cartao.png`,
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

const Bemvindo = () => {
  return (
    <div className="row p-4 mx-0 bg-primary">

      <Title
        label="Bem vindos ao EiMilhas!"
        color="white"
      />
      <Subtitle
        label="Compre passagens aéreas com até 50% de desconto."
        color="orange"
      />
      <Cards cards={cards}/>
    </div>
  )
}

export default Bemvindo
