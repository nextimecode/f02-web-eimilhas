import React from 'react'
import Subtitle from '../../atoms/subtitle'
import Title from '../../atoms/title'
import PlaneSeparator from '../../molecules/planeSeparator'
import Slider from '../slider'

const pathAvatars = 'assets/img/avatars'
const depoimentos = [
  {
    depoimento: {
      foto: `${pathAvatars}/user.png`,
      nome: 'Ana da Silva',
      profissao: 'Advogada',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis malesuada quam nec scelerisque. Cras pulvinar, mauris luctus dignissim luctus, nisl orci hendrerit sapien, vitae auctor enim purus in tellus. Donec urna leo, molestie non auctor congue, mollis quis enim. Phasellus purus odio, interdum ac accumsan eget, finibus a elit. Aenean mattis sagittis accumsan. Nulla facilisi.'
    }
  },
  {
    depoimento: {
      foto: `${pathAvatars}/user.png`,
      nome: 'Joana Felisbina',
      profissao: 'Engenheira',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis malesuada quam nec scelerisque. Cras pulvinar, mauris luctus dignissim luctus, nisl orci hendrerit sapien, vitae auctor enim purus in tellus. Donec urna leo, molestie non auctor congue, mollis quis enim. Phasellus purus odio, interdum ac accumsan eget, finibus a elit. Aenean mattis sagittis accumsan. Nulla facilisi.'
    }
  },
  {
    depoimento: {
      foto: `${pathAvatars}/user.png`,
      nome: 'Maria Ferreira',
      profissao: 'Professora',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis malesuada quam nec scelerisque. Cras pulvinar, mauris luctus dignissim luctus, nisl orci hendrerit sapien, vitae auctor enim purus in tellus. Donec urna leo, molestie non auctor congue, mollis quis enim. Phasellus purus odio, interdum ac accumsan eget, finibus a elit. Aenean mattis sagittis accumsan. Nulla facilisi.'
    }
  }
]

const Depoimentos = () => {
  return (
    <div className="row p-4 text-center">
      <Title
        label="Depoimentos"
        color="white"
      />
      <Subtitle
        label="Veja o que nossos clientes dizem"
        color="yellow"
      />
      <PlaneSeparator/>
      <Slider content={depoimentos} type="depoimentos" />
    </div>
  )
}

export default Depoimentos
