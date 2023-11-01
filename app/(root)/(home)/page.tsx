import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import { getQuestions } from "@/lib/actions/question.action";
import Link from "next/link";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | hireMeOverflow',
  description: 'hireMeOverflow is a Q&A platform for developers to share knowledge and build their careers. Peer to peer answers for all your coding questions. AI powered answers when you need them.',
}

// Nextjs server request at the top of the component
export default async function Home() {
  const result = await getQuestions({});

  return (
    <>
    <head>
    <title>Home | hireMeOverflow</title>
    <meta name="title" content="Home | hireMeOverflow" />
    <meta name="description" content="hireMeOverflow is a Q&A platform for developers to share knowledge and build their careers. Peer to peer answers for all your coding questions. AI powered answers when you need them." />

    
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://hire-me-overflow-i0r2q7tfh-itsevanb.vercel.app/" />
    <meta property="og:title" content="Home | hireMeOverflow" />
    <meta property="og:description" content="hireMeOverflow is a Q&A platform for developers to share knowledge and build their careers. Peer to peer answers for all your coding questions. AI powered answers when you need them." />
    <meta property="og:image" content="images/meta-tags.png" />

    
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://hire-me-overflow-i0r2q7tfh-itsevanb.vercel.app/" />
    <meta property="twitter:title" content="Home | hireMeOverflow" />
    <meta property="twitter:description" content="hireMeOverflow is a Q&A platform for developers to share knowledge and build their careers. Peer to peer answers for all your coding questions. AI powered answers when you need them." />
    <meta property="twitter:image" content="images/meta-tags.png" />
    </head>
      
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">

        <h1 className="h1-bold text-dark100_light900">All Questions</h1> 

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link> 
      </div> 

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar 
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {result.questions.length > 0 ?
          result.questions.map((question) => (
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
            title="There’s no question to show"
            description="Be the first to break the silence, Ask a Question and kickstart the discussion! 🚀"
            link="/ask-question"
            linkTitle="Ask a Question"
          />}
      </div>
    </>
  )
}