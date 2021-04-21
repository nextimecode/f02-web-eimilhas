import React from 'react'
import { DepoimentoProps } from '../../../types/types'
import Pessoa from '../pessoa'

type Props = {
    depoimento: DepoimentoProps
}

const Depoimento = ({ depoimento }: Props) => {
  return (
    <div className="container-fluid mb-5">
      <div className="depoimento rounded-15 border-gray row justify-content-center mb-2">
        <div className="text-white rounded position-relative p-4">
          <p className="post text-justify font-primary">
            <span className="mb-0">{depoimento.texto}</span>
          </p>
        </div>
        <hr className="depoimento-separator w-75"/>
        <Pessoa
          foto={depoimento.foto}
          nome={depoimento.nome}
          profissao={depoimento.profissao}
        />
      </div>
    </div>
  )
}

export default Depoimento
