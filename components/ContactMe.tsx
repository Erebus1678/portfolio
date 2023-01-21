import { useState } from 'react';

import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
import axios from 'axios';
import axiosRetry from 'axios-retry';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = () => {
  const { register, reset, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<Inputs>();
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = formData => {
    setIsSuccessfullySubmitted(isSubmitSuccessful)

    const message = `<pre>
Name: ${formData?.name},
Email :${formData?.email},

Subject: ${formData?.subject}
Text: ${formData?.message}
      </pre> 
      `
    axiosRetry(axios, { retries: 2 });

    axios.post(`https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
      parse_mode: 'html',
      text: message,

    })

    reset()

  }
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>
      {isSuccessfullySubmitted &&
        <h3 className='absolute bottom-10 text-[#F7AB0A] text-2xl animate-pulse'>The message was sent successfully</h3>}

      <div className='flex flex-col space-y-10 h-[85vh] mt-[15vh]'>
        <h4 className='text-4xl font-semibold text-center'>
          I have got just what you need. {''}
          <span className='underline decoration-[#F7AB0A] uppercase'>Let&apos;s talk!</span>
        </h4>
        <div className='space-y-5'>
          {/* <div className='flex items-center space-x-5 mx-auto justify-center'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p>+38011111111</p>
          </div> */}
          <div className='flex items-center space-x-5 mx-auto justify-center'>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <a href="mailto:dmitryi.platov@gmail.com
">dmitryi.platov@gmail.com
            </a>
          </div>
          <div className='flex items-center space-x-5 mx-auto justify-center'>
            <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p>Ukraine!</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input {...register('name')} className='contactInput' placeholder='Name' type="text" required />
            <input {...register('email')} className='contactInput' placeholder='E-mail' type="email" required />
          </div>
          <input {...register('subject')} className='contactInput' placeholder='Subject' type="text" required />
          <textarea {...register('message')} className='contactInput min-h-[60px] max-h-[120px]' placeholder='Message' required />
          <button className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'
            type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe