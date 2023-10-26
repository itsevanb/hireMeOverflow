import { getQuestionById } from '@/lib/actions/question.action';
import React from 'react'

const Page = async ({ params, searchParams }) => {
  const result = await getQuestionById({ questionId: params.id });

  return (
    <div>{result.title}</div>
  )
}

export default Page