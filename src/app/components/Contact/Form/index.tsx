'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'

const contactSchema = z.object({
  fullname: z
    .string()
    .min(2, 'Full name must be at least 2 characters.')
    .max(60, 'Full name is too long.'),
  email: z.string().email('Enter a valid email address.'),
  phnumber: z
    .string()
    .optional()
    .refine(
      (val) => !val || val.length === 0 || (val.length >= 7 && val.length <= 20 && /^[\d()+\-\s]+$/.test(val)),
      { message: 'Enter a valid phone number.' }
    ),
  Message: z
    .string()
    .min(5, 'Please let us know how we can help you.')
    .max(500, 'Message is too long.'),
})

type ContactForm = z.infer<typeof contactSchema>

const defaultValues: ContactForm = {
  fullname: '',
  email: '',
  phnumber: '',
  Message: '',
}

const ContactForm = () => {
  const [showThanks, setShowThanks] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues,
    mode: 'onBlur',
  })

  const fieldClass =
    'w-full text-base px-5 rounded-2xl py-3 border border-secondary bg-white shadow-[0_18px_35px_-20px_rgba(47,42,31,0.35)] transition-colors duration-300 focus:border-primary focus:ring-2 focus:ring-primary/25 focus:outline-none'

  const onSubmit = async (data: ContactForm) => {
    try {
      console.warn(
        'Contact form submission not yet configured. Replace with API integration.',
      )
      // Simulate async workflow for UX parity with future API integration
      await new Promise((resolve) => setTimeout(resolve, 400))
      toast.success('We received your message. We will get back to you soon!')
      setShowThanks(true)
      setTimeout(() => {
        setShowThanks(false)
      }, 5000)
      reset(defaultValues)
    } catch (error) {
      console.error('Contact form submission failed:', error)
      toast.error('We could not send your message. Please try again.')
    }
  }
  return (
    <section id='contact' className='scroll-mt-20'>
      <div className='container'>
        <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase text-center'>
            Contact Us
          </p>
        <h2 className='mb-9 font-bold tracking-tight text-center'>
          Get In Touch
        </h2>
        <div className='relative border border-secondary bg-secondary px-6 py-6 rounded-3xl shadow-[0_28px_60px_-40px_rgba(47,42,31,0.45)]'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-wrap w-full m-auto justify-between'
            noValidate>
            <div className='sm:flex gap-6 w-full'>
              <div className='mx-0 my-2.5 flex-1'>
                <label htmlFor='fname' className='pb-3 inline-block text-base'>
                  Full Name
                </label>
                <input
                  id='fname'
                  type='text'
                  {...register('fullname')}
                  placeholder='John Doe'
                  className={fieldClass}
                />
                {errors.fullname && (
                  <p className='mt-2 text-sm text-red-600'>
                    {errors.fullname.message}
                  </p>
                )}
              </div>
              <div className='mx-0 my-2.5 flex-1'>
                <label htmlFor='email' className='pb-3 inline-block text-base'>
                  Email Address
                </label>
                <input
                  id='email'
                  type='email'
                  {...register('email')}
                  placeholder='john.doe@example.com'
                  className={fieldClass}
                />
                {errors.email && (
                  <p className='mt-2 text-sm text-red-600'>
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className='mx-0 my-2.5 flex-1'>
                <label
                  htmlFor='Phnumber'
                  className='pb-3 inline-block text-base'>
                  Phone Number (Optional)
                </label>
                <input
                  id='Phnumber'
                  type='tel'
                  inputMode='tel'
                  placeholder='+1234567890'
                  {...register('phnumber')}
                  className={fieldClass}
                />
                {errors.phnumber && (
                  <p className='mt-2 text-sm text-red-600'>
                    {errors.phnumber.message}
                  </p>
                )}
              </div>
            </div>
            <div className='w-full mx-0 my-2.5 flex-1'>
              <label htmlFor='message' className='text-base inline-block'>
                Message
              </label>
              <textarea
                id='message'
                rows={4}
                {...register('Message')}
                className={`${fieldClass} mt-2 min-h-[140px] resize-vertical`}
                placeholder='How can we help you?'></textarea>
              {errors.Message && (
                <p className='mt-2 text-sm text-red-600'>
                  {errors.Message.message}
                </p>
              )}
            </div>
            <div className='mx-0 my-2.5 w-full'>
              <button
                type='submit'
                disabled={isSubmitting}
                className={`border leading-none px-6 text-lg font-medium py-4 rounded-full 
                    ${
                      isSubmitting
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-primary border-primary text-white hover:bg-transparent hover:text-primary cursor-pointer'
                    }`}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
          {showThanks && (
            <div
              className='text-white bg-primary rounded-full px-4 text-lg mb-4.5 mt-3 absolute flex items-center gap-2'
              role='status'
              aria-live='polite'>
              Thanks! We received your message and will get back to you soon.
              <div className='w-3 h-3 rounded-full animate-spin border-2 border-solid border-white border-t-transparent'></div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactForm
