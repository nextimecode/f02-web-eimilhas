import React from 'react'
import Subtitle from '../../atoms/subtitle'
import Title from '../../atoms/title'
import Slider from '../slider'

const pathLugares = 'assets/img/lugares/fotos'
const pathBandeiras = 'assets/img/lugares/bandeiras'

const promocoes = [
  {
    promocao: {
      foto: `${pathLugares}/rio.jpg`,
      bandeira: `${pathBandeiras}/user.png`,
      pais: 'Brasil',
      artigo: 'o',
      preco: 200
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/rio.jpg`,
      bandeira: `${pathBandeiras}/user.png`,
      pais: 'EUA',
      artigo: 'os',
      preco: 1500
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/rio.jpg`,
      bandeira: `${pathBandeiras}/user.png`,
      pais: 'Inglaterra',
      artigo: 'a',
      preco: 3000
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/rio.jpg`,
      bandeira: `${pathBandeiras}/user.png`,
      pais: 'Itália',
      artigo: 'a',
      preco: 2000
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/rio.jpg`,
      bandeira: `${pathBandeiras}/user.png`,
      pais: 'Austrália',
      artigo: 'a',
      preco: 5000
    }
  }
]

const Promocoes = () => {
  return (
    <div className="row p-4 mx-0 bg-red">

      <Title
        label="Promoções"
        color="white"
      />
      <Subtitle
        label="Os destinos com maior desconto"
        color="yellow"
      />
      <Slider content={promocoes} type="promocoes" />
    </div>
  )
}

export default Promocoes
