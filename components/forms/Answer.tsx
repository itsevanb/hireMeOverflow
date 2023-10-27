"use client"

import React, { useRef } from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { useForm } from 'react-hook-form'
import { AnswerSchema } from '@/lib/validations'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Editor } from '@tinymce/tinymce-react'

const Answer = () => {
  const editorRef = useRef(null)
  const form = useForm<z.infer<typeof AnswerSchema>>({ resolver: zodResolver(AnswerSchema), 
  defaultValues:{
    answer: ''
  }
})

const handleCreateAnswer = () => {}

  return (
    <Form {...form}>
      <form className="mt-6 flex w-full flex-col gap-10"
      onSubmit={form.handleSubmit(handleCreateAnswer)}>
        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="paragraph-semibold text-dark400_light800">Detailed explanation of your problem <span className="text-primary-500">*</span></FormLabel>
              <FormControl className="mt-3.5">
              <Editor
                apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                onInit={(evt: any, editor: any) => {
                  // @ts-ignore
                  editorRef.current = editor
                }}
                onBlur={field.onBlur}
                onEditorChange={(content: string) => field.onChange(content)}
                initialValue=""
                init={{
                  height: 350,
                  menubar: false,
                  plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor',
                    'searchreplace', 'visualblocks', 'codesample', 'fullscreen',
                    'insertdatetime', 'media', 'table'
                  ],
                  toolbar: 
                  'undo redo | ' +
                  'codesample | bold italic forecolor | alignleft aligncenter |' +
                  'alignright alignjustify | bullist numlist',
                  content_style: 'body { font-family:Inter; font-size:16px }'
                }}
              />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Introduce the problem and expand on what you put in the title. Minimum 20 characters.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
 }

export default Answer