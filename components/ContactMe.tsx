import { useState } from 'react'

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
    <div className="min-h-screen w-full max-w-6xl min-[2000px]:max-w-[1680px] min-[2560px]:max-w-[1920px] mx-auto flex flex-col justify-center gap-8 sm:gap-12 px-6 py-24 sm:px-10">
      <SectionHeading tag="// get in touch" title="Contact" />

      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-[clamp(1.3rem,1rem+1.5vw,2rem)] font-medium leading-[1.15]">
            Have a role or a hard frontend problem worth solving?{' '}
            <span className="text-accent">Let&apos;s talk.</span>
          </p>

          <dl className="mt-8 border-t border-wire">
            <div className="flex flex-col gap-1 border-b border-wire py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <dt className="label">Email</dt>
              <dd>
                <a
                  href="mailto:dmitryi.platov@gmail.com"
                  className="font-mono text-sm transition-colors hover:text-accent"
                >
                  dmitryi.platov@gmail.com
                </a>
              </dd>
            </div>
            <div className="flex flex-col gap-1 border-b border-wire py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <dt className="label">Location</dt>
              <dd className="font-mono text-sm">Bucharest, RO — remote (EU)</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              {...register('name')}
              className="contactInput"
              placeholder="Name"
              aria-label="Name"
              type="text"
              required
            />
            <input
              {...register('email')}
              className="contactInput"
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
            className="contactInput min-h-[120px] resize-none"
            placeholder="Message"
            aria-label="Message"
            required
          />
          <button
            className="mt-1 rounded-none bg-accent px-6 py-3 font-mono text-sm uppercase tracking-[0.12em] text-paper transition-opacity hover:opacity-90"
            type="submit"
          >
            Send message ↗
          </button>

          {isSuccessfullySubmitted && (
            <p
              role="status"
              className="font-mono text-sm uppercase tracking-[0.1em] text-accent"
            >
              Message sent ✓
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default ContactMe
