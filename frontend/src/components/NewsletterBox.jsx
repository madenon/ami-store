import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (e)=>{
        e.preventDefault()
    }
  return (
    <div className='text-center border border-s-2 bg-gray-200 mt-32 rounded-l-none '>
        <p className='text-2xl font-medium text-gray-700'>
            Abonnez-vous  à notre  newsLetter pour etre à informer de toute les nouvautées
        </p>
        <p className='text-gray-400 mt-3'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque cupiditate enim rerum? Labore quod doloremque eveniet iure commodi voluptas fuga?
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 shadow-md bg-slate-500 flex items-center gap-3 mx-auto my-6 border pl-2'>
            <input className='w-full sm:flex-1 outline-none rounded-s-full' type="email" placeholder='Votre email' />
            <button type='submit' className='bg-slate-700 rounded-t-xl text-white text-xs px-10 py-4'>
               Aboonez-vous
            </button>
        </form>
    </div>
  )
}

export default NewsletterBox