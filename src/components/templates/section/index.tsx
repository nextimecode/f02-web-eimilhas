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
      <div className="row m-0" style={{ paddingTop: '20vmin' }}>
        {children}
      </div>
      <Separator/>
    </section>
  )
}

export default Section
