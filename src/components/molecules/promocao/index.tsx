import React from 'react'
import { Button } from 'react-bootstrap'
import { PromocaoProps } from '../../../types/types'
import Preco from '../../atoms/preco'

import './style.scss'

type Props = {
    promocao: PromocaoProps
}

// promocao: {
//     foto: `${pathLugares}/user.png`,
//     bandeira: `${pathBandeiras}/user.png`,
//     pais: 'Brasil',
//     artigo: 'o',
//     preco: 200
// }

const Promocao = ({
  promocao
}: Props) => {
  return (
    <div className="rounded overflow-hidden h-100 py-2 text-center bg-white m-4">
      <img src={promocao.foto} className="card-img-top m-auto"/>

      <div className="card-body">
        {/* <div className="fs-1 fw-bolder text-uppercase card-title text-red">{title}</div>
                {children} */}
        <p>Viagem para {promocao.artigo} <span className="fw-bold">{promocao.pais}</span> a partir de <Preco value={promocao.preco}/> (ida e volta). Confira as datas</p>
      </div>
      <div className="card-footer d-flex align-items-center justify-content-center">
        <Button>Reservar Agora!</Button>
        {/* <Button label={buttonLabel} href={linkPage} /> */}
      </div>
    </div>
  )
}

export default Promocao
