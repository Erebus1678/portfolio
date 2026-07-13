import { useRef, useState } from 'react'

import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import axiosRetry from 'axios-retry'

import { useMagnetic } from '../lib/reveal'

const LINKEDIN_URL = 'https://www.linkedin.com/in/dmitryi-platov/'

// Configure retry once at module load, not on every submit.
axiosRetry(axios, { retries: 2 })

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

type Status = 'idle' | 'sending' | 'sent' | 'error'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const FieldError = ({ children }: { children?: string }) =>
  children ? (
    <span role="alert" className="font-mono text-xs text-ink">
      {children}
    </span>
  ) : null

const ContactMe = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onTouched' })
  const [status, setStatus] = useState<Status>('idle')
  const ctaRef = useRef<HTMLAnchorElement>(null)
  useMagnetic(ctaRef, { strength: 0.4, max: 16 })

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    setStatus('sending')

    const message = `<pre>
Name: ${formData?.name},
Email :${formData?.email},

Subject: ${formData?.subject}
Text: ${formData?.message}
      </pre>
      `

    try {
      await axios.post(
        `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_TOKEN}/sendMessage`,
        {
          chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
          parse_mode: 'html',
          text: message,
        }
      )
      setStatus('sent')
      reset()
    } catch {
      setStatus('error')
    }
  }

  const isSending = status === 'sending'

  return (
    <div className="min-h-screen w-full max-w-6xl min-[2000px]:max-w-[1680px] min-[2560px]:max-w-[1920px] mx-auto flex flex-col justify-center gap-8 sm:gap-12 px-6 py-24 sm:px-10">
      {/* Deliberate break from the // tag + Title scaffold used by every other
          section: the closing beat drops the eyebrow and leads with the ask.
          It keeps the shared baseline + right-aligned meta slot, so the break
          reads as within-system restraint, not a skipped section. */}
      <div className="w-full border-b border-ink pb-3 sm:pb-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-bold uppercase leading-[0.9] tracking-[-0.02em] text-[clamp(2.2rem,1.1rem+5.4vw,5.5rem)]">
            Let&apos;s talk.
          </h2>
          <span className="label hidden sm:block whitespace-nowrap pb-1">
            Usually replies in a day
          </span>
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col">
          <p className="text-[clamp(1.3rem,1rem+1.5vw,2rem)] font-medium leading-[1.15]">
            Have a role or a hard frontend problem worth solving?{' '}
            <span className="text-accent">
              Connect and let&apos;s get into it.
            </span>
          </p>

          <a
            ref={ctaRef}
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 self-start rounded-none bg-accent px-6 py-3.5 font-mono text-sm uppercase tracking-[0.12em] text-paper transition-opacity hover:opacity-90"
          >
            Let&apos;s connect ↗
          </a>

          <dl className="mt-10 border-t border-wire">
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

        <div className="flex flex-col">
          <span className="label mb-4">Or send a message</span>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
            noValidate
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex w-full flex-col gap-1.5">
                <input
                  {...register('name', { required: 'Name is required' })}
                  className="contactInput aria-[invalid=true]:border-ink"
                  placeholder="Name"
                  aria-label="Name"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  type="text"
                />
                <FieldError>{errors.name?.message}</FieldError>
              </div>
              <div className="flex w-full flex-col gap-1.5">
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: EMAIL_PATTERN,
                      message: 'Enter a valid email',
                    },
                  })}
                  className="contactInput aria-[invalid=true]:border-ink"
                  placeholder="E-mail"
                  aria-label="E-mail"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  type="email"
                />
                <FieldError>{errors.email?.message}</FieldError>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <input
                {...register('subject', { required: 'Subject is required' })}
                className="contactInput aria-[invalid=true]:border-ink"
                placeholder="Subject"
                aria-label="Subject"
                aria-invalid={errors.subject ? 'true' : 'false'}
                type="text"
              />
              <FieldError>{errors.subject?.message}</FieldError>
            </div>
            <div className="flex flex-col gap-1.5">
              <textarea
                {...register('message', { required: 'Message is required' })}
                className="contactInput min-h-[120px] resize-none aria-[invalid=true]:border-ink"
                placeholder="Message"
                aria-label="Message"
                aria-invalid={errors.message ? 'true' : 'false'}
              />
              <FieldError>{errors.message?.message}</FieldError>
            </div>
            <button
              className="mt-1 rounded-none border border-ink px-6 py-3 font-mono text-sm uppercase tracking-[0.12em] text-ink transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-50"
              type="submit"
              disabled={isSending}
            >
              {isSending ? 'Sending…' : 'Send message ↗'}
            </button>

            {status === 'sent' && (
              <p
                role="status"
                className="font-mono text-sm uppercase tracking-[0.1em] text-accent"
              >
                Message sent ✓
              </p>
            )}
            {status === 'error' && (
              <p
                role="alert"
                className="font-mono text-sm uppercase tracking-[0.1em] text-ink"
              >
                Couldn&apos;t send — email me directly or try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
