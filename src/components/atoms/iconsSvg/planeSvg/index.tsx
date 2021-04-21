import React from 'react'

type Props = {
    size?: string
    color?: string
}

const PlaneSvg = ({
  size = '30px',
  color = 'white'
}: Props) => {
  return (
    <svg version="1.1" id="Capa_1" x="0px" y="0px" width={size} height={size} viewBox="0 0 510 510" >
      <g>
        <g id="flights">
          <path fill={color} d="M510,255c0-20.4-17.85-38.25-38.25-38.25H331.5L204,12.75h-51l63.75,204H76.5l-38.25-51H0L25.5,255L0,344.25h38.25
                        l38.25-51h140.25l-63.75,204h51l127.5-204h140.25C492.15,293.25,510,275.4,510,255z"/>
        </g>
      </g>
      <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
    </svg>
  )
}

export default PlaneSvg
