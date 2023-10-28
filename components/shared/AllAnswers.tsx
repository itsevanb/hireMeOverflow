import React from 'react'
import Filter from './Filter';
import { AnswerFilters } from '@/constants/filters';
import { getAnswers } from '@/lib/actions/answer.action';

interface Props {
    questionId: string;
    userId: string;
    totalAnswers: number;
    page?: number;
    filter?: string;
}

const AllAnswers = async ({ questionId, userId, totalAnswers, page, filter }: Props) => {
    const result = await getAnswers({
        questionId,
    })
  return (
    <div className="mt-11">
        <div className="flex items-center justify-between">
            <h3 className="primary-text-gradient">
                {totalAnswers} Answers
            </h3>
            <Filter filters={AnswerFilters}/>
        </div>

        <div>
            {result.answers.map((answer) => (
                <article key={answer._id}
                className="light-border border-b py-10">
                    <div className="flex items-center justify-between">
                        {/* SPAN ID */}
                    </div>
                </article>
            ))}
        </div>
    </div>
  )
}

export default AllAnswers