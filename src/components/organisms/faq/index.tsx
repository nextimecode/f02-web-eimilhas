import React from 'react'
import { QuestionProps } from '../../../types/types'
import Title from '../../atoms/title'
import FrequentQuestions from '../../molecules/frequentQuestions'
import PlaneSeparator from '../../molecules/planeSeparator'

type Props = {
    questions: Record<string, QuestionProps>[]
}

const Faq = ({ questions }: Props) => {
  return (
    <div className="row p-2 mx-0 text-center">
      <Title
        label="Perguntas Frequentes"
        color="black"
      />
      <PlaneSeparator
        size={30}
        color="primary"
      />
      <FrequentQuestions
        questions={questions}
      />
    </div>
  )
}

export default Faq
