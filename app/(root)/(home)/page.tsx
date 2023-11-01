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
  description: 'A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.',
  icons: {
    icon: '/assets/images/site-logo.svg'
  },
  openGraph: {
    title: 'hireMeOverflow',
    description: 'hireMeOverflow is a Q&A platform for developers to share knowledge and build their careers. Peer to peer answers for all your coding questions.',
    url: 'https://hire-me-overflow.vercel.app/',
    siteName: 'hireMeOverflow',
    images: [
      {
        url: 'https://hire-me-overflow.vercel.app/assets/images/meta.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://hire-me-overflow.vercel.app/assets/images/meta.png',
        width: 1800,
        height: 1600,
        alt: 'hireMeOverflow Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  itunes: {
    appId: 'evanj.betley@gmail.com',
  },
  appleWebApp: {
    title: 'hireMeOverflow',
    statusBarStyle: 'black-translucent',
    startupImage: [
      'https://hire-me-overflow.vercel.app/assets/images/meta.png',
      {
        url: 'https://hire-me-overflow.vercel.app/',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "hireMeOverflow",
    description: "hireMeOverflow is a Q&A platform for developers to share knowledge and build their careers. Peer to peer answers for all your coding questions.",
    creator: "@Itsevanb",
    images:
      {
        url: "https://hire-me-overflow.vercel.app/assets/images/meta.png",
        alt: "hireMeOverflow Logo",
        width: 1200,
        height: 630,
      },
  },
}

// Nextjs server request at the top of the component
export default async function Home() {
  const result = await getQuestions({});

  return (
    <>
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