import React from 'react'
import {Footer} from 'flowbite-react'
import { Link } from 'react-router-dom'
import {BsFacebook,BsInstagram,BsTwitterX,BsGithub,BsTelegram} from 'react-icons/bs'

export default function FooterCom() {
  return (
   <Footer container className='border border-t-8 border-teal-500'>
    <div className='w-full max-w-7xl mx-auto'>
       <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
         <div className='mt-5 '>
         <Link to="/" className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white">
      <span className="px-2 py-1 bg-gradient-to-r from-indigo-500
       via-purple-500 to-pink-500  rounded-lg text-white" >vkey's</span>
      Blog
    </Link>
       </div>
       <div className='grid grid-cols-2 gap-8 mt-4
        sm:grid-cols-3 sm:gap-6 '>
            <div>
            <Footer.LinkGroup col>
            <Footer.Title title='About'/>
            <Footer.Link
            href='https://www.vickyvip81.com'
            target='_blank'
            rel='noopener noreferrer'
            >
                vicky's projects
            </Footer.Link>
            <Footer.Link
            href='https://www.vickyvip81.com'
            target='_blank'
            rel='noopener noreferrer'
            >
                vicky's blog
            </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div>
            <div>
            <Footer.LinkGroup col>
            <Footer.Title title='FOLLOW US'/>
            <Footer.Link
            href='https://www.github.com/VickyBE1994'
            target='_blank'
            rel='noopener noreferrer'
            >
                Github
            </Footer.Link>
            <Footer.Link
            href='#'
            target='_blank'
            rel='noopener noreferrer'
            >
                Discord
            </Footer.Link>
            </Footer.LinkGroup>
            </div>
            </div>
           <div>
           <div>
            <Footer.LinkGroup col>
            <Footer.Title title='legal'/>
            <Footer.Link
            href=''
            target='_blank'
            rel='noopener noreferrer'
            >
                privacy policy
            </Footer.Link>
            <Footer.Link
            href='#'
            target='_blank'
            rel='noopener noreferrer'
            >
                Terms & Conditions
            </Footer.Link>
            </Footer.LinkGroup>
            </div>
           </div>
        </div>
      </div>
      <Footer.Divider/>
      <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-between'>
        <Footer.Copyright
        href='#'
        by="vicky's blog"
        year={new Date().getFullYear()}/>
        <div className='flex gap-6 sm:mt-0 sm:justify-center'>
            <Footer.Icon href='#'  icon={BsFacebook}/>
            <Footer.Icon href='#'  icon={BsInstagram}/>
            <Footer.Icon href='#'  icon={BsTwitterX}/>
            <Footer.Icon href='github.com/vickyBE@1994'  icon={BsGithub}/>
            <Footer.Icon href='#'  icon={BsTelegram}/>
           
           

        </div>
      </div>
    </div>
   
   
   </Footer>
  )
}
