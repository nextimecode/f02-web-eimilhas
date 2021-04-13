import React from 'react'
import { DepoimentoProps } from '../../../types/types'
import Pessoa from '../pessoa'

type Props = {
    depoimento: DepoimentoProps
}

const Depoimento = ({ depoimento }: Props) => {
  return (
    <div className="container-fluid mb-5">
      <div className="row justify-content-center">
        <div className="mb-2">
          <div className="bg-cyan text-black rounded-3 position-relative p-4">
            <p className="post text-justify">
              <span className="mb-0">{depoimento.texto}</span>
            </p>
          </div>
          <div className="arrow-down"></div>
        </div>
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
