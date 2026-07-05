import { useState } from 'react'

import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import axiosRetry from 'axios-retry'

import SectionHeading from './SectionHeading'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

const ContactMe = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = useForm<Inputs>()
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false)

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    setIsSuccessfullySubmitted(isSubmitSuccessful)

    const message = `<pre>
Name: ${formData?.name},
Email :${formData?.email},

Subject: ${formData?.subject}
Text: ${formData?.message}
      </pre>
      `
    axiosRetry(axios, { retries: 2 })

    axios.post(
      `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_TOKEN}/sendMessage`,
      {
        chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
        parse_mode: 'html',
        text: message,
      }
    )

    reset()
  }

  return (
    <div className="min-h-screen w-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-y-[clamp(2rem,4vh,3rem)] px-4 py-24 sm:px-6 text-center">
      <SectionHeading title="Contact" />

      <div className="flex flex-col w-full gap-y-[clamp(1.5rem,3vh,2.5rem)]">
        <h3 className="font-semibold text-[clamp(1.5rem,1.1rem+1.6vw,2.25rem)]">
          I have got just what you need.{' '}
          <span className="underline decoration-[#F7AB0A] uppercase">
            Let&apos;s talk!
          </span>
        </h3>

        <div className="space-y-4">
          <div className="flex items-center space-x-5 mx-auto justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse flex-shrink-0" />
            <a href="mailto:dmitryi.platov@gmail.com">
              dmitryi.platov@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-5 mx-auto justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse flex-shrink-0" />
            <p>Bucharest, Romania · open to remote (EU) &amp; relocation</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full mx-auto"
        >
          <div className="flex flex-col sm:flex-row w-full space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              {...register('name')}
              className="contactInput w-full sm:w-1/2"
              placeholder="Name"
              aria-label="Name"
              type="text"
              required
            />
            <input
              {...register('email')}
              className="contactInput w-full sm:w-1/2"
              placeholder="E-mail"
              aria-label="E-mail"
              type="email"
              required
            />
          </div>
          <input
            {...register('subject')}
            className="contactInput"
            placeholder="Subject"
            aria-label="Subject"
            type="text"
            required
          />
          <textarea
            {...register('message')}
            className="contactInput min-h-[60px] max-h-[80px] sm:max-h-[120px]"
            placeholder="Message"
            aria-label="Message"
            required
          />
          <button
            className="bg-[#f7ab0a] py-3 sm:py-5 px-6 sm:px-10 rounded-md text-black font-bold text-base sm:text-lg"
            type="submit"
          >
            Submit
          </button>
        </form>

        {isSuccessfullySubmitted && (
          <p
            role="status"
            className="text-[#F7AB0A] text-lg sm:text-2xl animate-pulse"
          >
            The message was sent successfully
          </p>
        )}
      </div>
    </div>
  )
}

export default ContactMe
