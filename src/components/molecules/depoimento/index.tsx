import React from 'react'
import { DepoimentoProps } from '../../../types/types'
import Pessoa from '../pessoa'

import './style.scss'

type Props = {
    depoimento: DepoimentoProps
}

const Depoimento = ({ depoimento }: Props) => {
  return (
    <div className="container-fluid mb-5">
      <div className="row justify-content-center">
        <div className="mb-2">
          <div className="card-depoimento p-4">
            <p className="post">
              <span className="post-txt">{depoimento.texto}</span>
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
