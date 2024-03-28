import { Sidebar } from "flowbite-react"
import {HiArrowSmRight, HiUser} from 'react-icons/hi'
import { Link, useLocation } from "react-router-dom"
import { useState,useEffect } from "react"
import {signoutSuccess } from '../redux/user/userSlice.js'
import { useDispatch } from 'react-redux'




export default function DashSidebar() {
    const location=useLocation()
    const [tab,setTab]=useState(' ')
    const disPatch=useDispatch()
    useEffect(()=>{
      const urlParams= new URLSearchParams(location.search)
      const tabFromUrl=urlParams.get('tab')
    if(tabFromUrl){
      setTab(tabFromUrl)
    }
    },[location.search])

    const handleSignout=async()=>{
      try {
          const res= await fetch('/api/user/signout',{
             method:'POST' 
          })
          const data=res.json()
          if(!res.ok){
              console.log(data.message)
          }else{
          disPatch(signoutSuccess())
          }
      } catch (error) {
          console.log(error.message);
      }
      }
  return (
   <Sidebar className='w-full md:w-56 '>
    <Sidebar.Items>
        <Sidebar.ItemGroup>
            <Link to={'/dashboard?tab=profile'}>
            <Sidebar.Item active ={tab ==='profile'} 
            icon={HiUser}
             label={'user'} 
             labelColor={'dark'}
             as='div'
             >
                profile
            </Sidebar.Item>

            <Sidebar.Item onClick={handleSignout} 
            icon={HiArrowSmRight}
             className='cursor-pointer'
            as='div'>
                Sign Out
            </Sidebar.Item>
            </Link>
        </Sidebar.ItemGroup>
    </Sidebar.Items>
   </Sidebar>
  )
}
