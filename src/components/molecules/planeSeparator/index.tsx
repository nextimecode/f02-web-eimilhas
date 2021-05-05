import React from 'react'
import Plane from '../../atoms/iconsSvg/planeSvg'

type Props = {
    size?: number
    color?: string
    widthPercentage?: number
    gridColPlane?: number
}

const PlaneSeparator = ({
  size = 30,
  color = 'white',
  widthPercentage = 50,
  gridColPlane = 3
}: Props) => {
  return (
    <div className="container my-2" style={{ width: `${widthPercentage}%` }}>
      <div className="plane-separator row p-0">
        <div className={`plane-contrail m-auto col-${12 - gridColPlane}`}>
          <hr
            className={`contrail contrail-${color}`}
            style={{ height: `${(size / 3)}px` }}
          ></hr>
        </div>
        <div className={`plane-object col-${gridColPlane} m-auto p-0`}>
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
