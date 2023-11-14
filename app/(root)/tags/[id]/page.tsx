import QuestionCard from '@/components/cards/QuestionCard'
import NoResult from '@/components/shared/NoResult'
import LocalSearchbar from '@/components/shared/search/LocalSearchbar'
// import { IQuestion } from '@/database/question.model'
import { getQuestionsByTagId } from '@/lib/actions/tag.actions'
import { URLProps } from '@/types'
import React from 'react'

const Page = async ({ params, searchParams }: URLProps) => {
    const result = await getQuestionsByTagId({
        tagId: params.id,
        page: 1,
        searchQuery: searchParams.q
    })

    return (
        <>
          <h1 className="h1-bold text-dark100_light900">{result.tagTitle}</h1> 
    
          <div className="mt-11 w-full">
            <LocalSearchbar 
              route={`/tags/${params.id}`}
              iconPosition="left"
              imgSrc="/assets/icons/search.svg"
              placeholder="Search tag questions"
              otherClasses="flex-1"
            />
          </div>
    
          <div className="mt-10 flex w-full flex-col gap-6">
            {result.questions.length > 0 ?
              result.questions.map((question: any ) => (
                <QuestionCard 
                  key={question._id}
                  _id={question._id}
                  title={question.title}
                  tags={question.tags}
                  author={question.author}
                  upvotes={question.upvotes}
                  views={question.views}
                  answers={question.answers}
                  createdAt={question.createdAt}
                />
              ))
              : <NoResult 
                title="There are no questions for this tag yet!"
                description="Look for specific tags that answer the question you are looking for! 🚀 Browse the Questions to get started, or start your own conversation by asking questions YOU need answers to. Get involved! 💡"
                link="/ask-question"
                linkTitle="Ask a Question"
              />}
          </div>
        </>
      )
    }
    
    export default Page