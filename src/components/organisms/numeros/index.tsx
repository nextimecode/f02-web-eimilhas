import React from 'react'
import CustomerSvg from '../../atoms/iconsSvg/customerSvg'
import GlobeSvg from '../../atoms/iconsSvg/globeSvg'
import StudentSvg from '../../atoms/iconsSvg/studentSvg'
import Subtitle from '../../atoms/subtitle'
import Title from '../../atoms/title'
import Counter from '../../molecules/counter'
import PlaneSeparator from '../../molecules/planeSeparator'

const size = '100px'
const cards = [
  {
    card: {
      title: '5000+',
      subtitle: 'passagens vendidas',
      image: <CustomerSvg size={size}/>
    }
  }, {
    card: {
      title: '5',
      subtitle: 'cursos de milhas',
      image: <StudentSvg size={size}/>
    }
  },
  {
    card: {
      title: '80+',
      subtitle: 'países atendidos',
      image: <GlobeSvg size={size}/>
    }
  }
]

const Numeros = () => {
  return (
    <div className="row p-4 mx-0 text-center">

      <Title
        label="Números"
        color="black"
      />
      <Subtitle
        label="de clientes SATISFEITOS"
        color="primary"
      />
      <PlaneSeparator
        size={30}
        color="primary"
      />

      <div
        className="row p-4 mx-0 justify-content-center rounded-15"
        style={{
          backgroundColor: 'rgba(255,255,255,0.8)'
        }}
      >
        {cards.map((c, index) => (
          <div
            key={index}
            className="col-xs-12 col-sm-6 col-md-3 py-2"
          >
            <Counter
              title={c.card.title}
              subtitle={c.card.subtitle}
            >
              {c.card.image}
            </Counter>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Numeros
