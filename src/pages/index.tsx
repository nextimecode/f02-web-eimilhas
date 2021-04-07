import React from 'react'
import Bemvindo from '../components/organisms/bemvindo'
import Depoimentos from '../components/organisms/depoimentos'
import Encontre from '../components/organisms/encontre'
import Numeros from '../components/organisms/numeros'
import Promocoes from '../components/organisms/promocoes'
import PageTemplate from '../components/templates/pageTemplate'
import Section from '../components/templates/section'

export const instagramUrl = 'https://www.instagram.com/eimilhas/'

const Index: React.FC = () => {
  return (
    <PageTemplate title="Home">

      <Section id="home">
        <Encontre/>
      </Section>

      <Section id="pagamento">
        <Bemvindo/>
      </Section>

      <Section id="promocoes">
        <Promocoes/>
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
