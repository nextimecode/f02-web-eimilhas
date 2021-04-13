import React from 'react'
import Separator from '../../atoms/separator'

type Props = {
    children: unknown,
    id?: string
}

const Section = ({
  children,
  id
}: Props) => {
  return (
    <section id={id} >
      <div className="site-section">
        <div className="row site-section">
          {children}
        </div>
        <Separator/>
      </div>
    </section>
  )
}

export default Section
