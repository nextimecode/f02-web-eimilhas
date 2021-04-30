import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import { QuestionProps } from '../../../types/types'

type Props = {
    questions: Record<string, QuestionProps>[]
}

const FrequentQuestions = ({ questions }: Props) => {
    return (
        <Accordion>
                {questions.map((q, index) => {
                    return (
                        <Card className="bg-transparent text-primary my-2 pointer" key={index}>
                            <Accordion.Toggle
                                as={Card.Header}
                                eventKey={index.toString()}
                            >
                                <h5 className="my-2">{q.question.label}</h5>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={index.toString()}>
                                <Card.Body className="text-justify bg-white faq-answer">
                                    {q.question.answer}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    )
                })}
            </Accordion>
    )
}

export default FrequentQuestions
