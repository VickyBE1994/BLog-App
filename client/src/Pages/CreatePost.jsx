import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import{getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage'
import {app} from '../firebase.js'
import {CircularProgressbar} from 'react-circular-progressbar'
import   'react-circular-progressbar/dist/styles.css'
import { useNavigate } from 'react-router-dom';




export default function CreatePost() {
  const [file,setFile]=useState(null)
  const [imageFileUploadProgress,setImageFileUploadProgress]=useState(null)
  const [imageFileUploadError,setImageFileUploadError]=useState(null)
  const [formData,setFormData]=useState({})
  const [puplishError,setPuplishError]=useState(null)
  const navigate=useNavigate()
  const handleUploadImage=async()=>{
    try {
      if(!file){
        setImageFileUploadError('please select an image')
        return
      }
      setImageFileUploadError(null)
      const storage=getStorage(app)
      const fileName= new Date().getTime() + '-' + file.name
      const storageRef=ref(storage,fileName)
      const uploadTask=uploadBytesResumable(storageRef,file)
      uploadTask.on(
        'state_changed',
        (snapshot)=>{
          const progress=
          (snapshot.bytesTransferred/snapshot.totalBytes) * 100
          setImageFileUploadProgress(progress.toFixed(0))
        },
        (error)=>{
          setImageFileUploadError('image upload failed')
          setImageFileUploadProgress(null)
        },
        ()=>{
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
            setImageFileUploadProgress(null)
            setImageFileUploadError(null)
            setFormData({...formData, image : downloadURL})
          })
        }
      )
      
    } catch (error) {
      setImageFileUploadError('image upload failed')
      setImageFileUploadProgress(null)
      console.log(error)
    }

  }

  const handleSubmit=async(e)=>{
e.preventDefault()
try {
  const res= await fetch('/api/post/create',{
    method:"POST",
    headers:{
      "content-Type":"application/json",
    },
    body:JSON.stringify(formData)
  });
  const data=await res.json()
  if(!res.ok){
    setPuplishError(data.message)
    return
  }
  
  if(res.ok){
    setPuplishError(null)
    navigate(`/post/${data.slug}`)
  }
} catch (error) {
  setPuplishError("something went wrong")
}
  }
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
   <h1 className='text-center text-3xl my-7 font-semibold'>create a post</h1>
   <form className='flex flex-col gap-4'onSubmit={handleSubmit}>
    <div className='flex flex-col gap-4 sm:flex-row justify-between'>
        <TextInput type='text' placeholder='Title' required id='title'
        className='flex-1'
        onChange={(e)=>setFormData({...formData,title:e.target.value})}/>
        <Select 
        onChange={(e)=>setFormData({...formData,category:e.target.value})}
        >
        
            <option value='uncategorized'>select a category</option>
            <option value='javascript'>javascript</option>
            <option value='react.js'>react.js</option>
            <option value='next.js'>next.js</option>
        </Select>
       </div>
       <div  className='flex gap-4 
       item-center justify-between 
       border-4 border-teal-500 
       border-dotted p-3'>
    <FileInput type='file' accept='image/*' onChange={(e)=>setFile(e.target.files[0])}/>
    <Button type='button' 
    gradientDuoTone='purpleToBlue'
     size='sm'
      outline 
      onClick={handleUploadImage}
      disabled={imageFileUploadProgress}>
        {imageFileUploadProgress?(
          <div className='w-16 h-16'>
            <CircularProgressbar value={imageFileUploadProgress}
            text={`${imageFileUploadProgress || 0}%`}/>
          </div>) :('upload image')}
        
        </Button>
       </div>
       {imageFileUploadError && <Alert color='failure'>
        {imageFileUploadError}
        </Alert>}
        {formData.image && (<img
          src={formData.image}
          alt='upload'
          className='w-full h-72 object-cover'/>)}
       <ReactQuill theme='snow'
        placeholder='write something...'
         className='h-72 mb-12' required
         onChange={(value)=>{setFormData({...formData,content:value})}}/>
       <Button type='submit'
        gradientDuoTone='purpleToPink' >
        Publish
        </Button>
        {puplishError && <Alert color='failure' className='mt-5'>{puplishError}</Alert>}
   </form>
    </div>

  )
}
