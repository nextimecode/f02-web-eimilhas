import React from 'react'
import Subtitle from '../../atoms/subtitle'
import Title from '../../atoms/title'
import Cards from '../cards'

const pathIcons = 'assets/img/numeros'
const cards = [
  {
    card: {
      imageIcon: `${pathIcons}/cliente.png`,
      title: '400+',
      subtitle: 'passagens vendidas'
    }
  }, {
    card: {
      imageIcon: `${pathIcons}/curso.png`,
      title: '5',
      subtitle: 'cursos de milhas'
    }
  },
  {
    card: {
      imageIcon: `${pathIcons}/passagem.png`,
      title: '50+',
      subtitle: 'países atendidos'
    }
  }
]

const Numeros = () => {
  return (
    <div className="row p-4 mx-0 bg-red">

      <Title
        label="Números"
        color="white"
      />
      <Subtitle
        label="de clientes SATISFEITOS"
        color="orange"
      />
      <Cards cards={cards}/>
    </div>
  )
}

export default Numeros
