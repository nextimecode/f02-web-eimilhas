import React from 'react'
import Plane from '../../atoms/iconsSvg/planeSvg'

type Props = {
    size?: number
    color?: string
}

const PlaneSeparator = ({
  size = 30,
  color = 'white'
}: Props) => {
  return (
    <div className="container w-50 my-2">
      <div className="plane-separator row">
        <div className="plane-contrail col-9 m-auto">
          <hr
            className={`contrail contrail-${color}`}
            style={{ height: `${(size / 3)}px` }}
          ></hr>
        </div>
        <div className="plane-object col-3 m-auto">
          <Plane
            size={`${size}px`}
            color={color}
          />
        </div>
      </div>
    </div>
  )
}

export default PlaneSeparator
