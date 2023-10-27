"use client"

import React from 'react'
import { Form } from '../ui/form'
import { useForm } from 'react-hook-form'
import { AnswerSchema } from '@/lib/validations'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const Answer = () => {
  const form = useForm<z.infer<typeof AnswerSchema>>({ resolver: zodResolver(AnswerSchema), 
  defaultValues:{
    answer: ''
  }
})

  return (
    <Form>
    </Form>
  )
}

export default Answer