import { Button } from 'flowbite-react'
import React from 'react'

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border
    border-teal-500 justify-center items-center rounded-tl-3xl 
    rounded-br-3xl text-center '>
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-2xl'>want to learn more about javascript?</h2>
        <p className='text-gray-500 mt-2'>checkout these resources with javascript.com</p>
        <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl
         rounded-bl-none'>
            <a  href='https://www.javascript.com' target='_blank' 
            rel='noopener noreferer'
            >JAVACSRIPT
              </a>
            </Button>
          
      </div>
      <div className='p-7 flex-1'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9G
        cQ4am68-Zt3vUUDdFuUwmJrFpLjHlpTk_MHkw&usqp=CAU" /> </div>
    </div>
  )
}
