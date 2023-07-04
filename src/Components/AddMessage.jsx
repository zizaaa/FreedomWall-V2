import axios from 'axios'
import { FaPenNib } from 'react-icons/fa'
import { HiOutlineChat } from 'react-icons/hi'
import happy from '/src/assets/emojis/Smiling Face Emoji.png'
import sad from '/src/assets/emojis/Crying Sad Emoji.png'
import angry from '/src/assets/emojis/Very Angry Emoji.png'
import crying from '/src/assets/emojis/Loudly Crying Face Emoji.png'
import surprised from '/src/assets/emojis/Surprised Emoji [Free Download IOS Emojis].png'
import shy from '/src/assets/emojis/Shy Emoji [Free Download IOS Emojis].png'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'


const AddMessage = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [theme, setTheme] = useState('#000000')
    const [emoji, setEmoji] = useState('happy')

    // const generateDate =()=>{
    //     // Define the month names
    //     let monthNames = [
    //         'January', 'February', 'March', 'April', 'May', 'June', 'July',
    //         'August', 'September', 'October', 'November', 'December'
    //     ];
        
    //     // Create a new Date object for the current date
    //     let currentDate = new Date();
        
    //     // Get the month, day, and year
    //     let month = monthNames[currentDate.getMonth()];
    //     let day = currentDate.getDate();
    //     let year = currentDate.getFullYear();
        
    //     // Format the date string
    //     let formattedDate = month + ' ' + day + ', ' + year;

    //     return formattedDate
    // }

    const postMessage =async(e)=>{
        e.preventDefault()

        if(name && message){
            try {
                const env = import.meta.env;
                const url = env.VITE_REACT_SERVER_URL

                    await axios.post(`${url}/api/comment`,{
                        to:name,
                        message:message,
                        theme:theme,
                        emoji:emoji
                        // datePosted:generateDate()
                    })

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                        Toast.fire({
                            icon: 'success',
                            title: 'You successfuly post a message'
                        })

                        navigate('/')
            } catch (error) {
                console.log(error)
            }
        }
    }

    const setEmojis = (e) =>{
        e.preventDefault()
        setEmoji(e.target.id)
    }

  return (
    <div className='h-full flex items-center justify-center'>
        <form className='flex flex-col bg-[rgb(38,55,72)] p-5 drop-shadow-md rounded-md max-[541px]:w-full w-[30rem]'>
            <div className='flex items-center text-2xl'>
                <span className='me-2'>
                    <FaPenNib/>
                </span>
                <h1>Create Message</h1>
            </div>
            <div className='flex flex-col mt-5'>
                <label htmlFor='name'>To:</label>
                <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} className='rounded-md p-2 outline-none text-black text-lg' name='name' placeholder='Example: Ziza' required/>

                <label htmlFor='message' value={message} className='mt-5 text-lg'>Message:</label>
                <textarea type='text' onChange={(e)=>{setMessage(e.target.value)}} className='rounded-md p-2 max-h-72 min-h-[5rem] outline-none text-black' name='message' placeholder='Type here your message or secret' required></textarea>
                <p className='w-full text-end'>0/100</p>
            </div>
            <div className='w-full flex flex-col items-center justify-center'>
                <h1 className='text-lg'>Theme</h1>
                <input type='color' onChange={(e)=>{setTheme(e.target.value)}} className='w-full outline-none cursor-pointer'/>
            </div>
            <div className='w-full flex flex-col items-center justify-center mt-5'>
                <h1 className='text-lg'>How are you feeling?</h1>
                <div className='w-full flex items-center justify-center flex-wrap gap-5 mt-5'>
                    <button onClick={(e)=>{setEmojis(e)}}  id='happy' className={`${emoji === 'happy' ? 'bg-slate-500':''} w-40 flex items-center px-3 py-2 rounded-lg hover:bg-slate-500 hover:drop-shadow-md`}>
                        <img src={happy} className='h-[3rem] w-[3rem]' style={{pointerEvents:'none'}}/>
                        <p className='ms-2' style={{pointerEvents:'none'}}>Happy</p>
                    </button>
                    <button onClick={(e)=>{setEmojis(e)}}  id='sad' className={`${emoji === 'sad' ? 'bg-slate-500':''} w-40 flex items-center px-3 py-2 rounded-lg hover:bg-slate-500 hover:drop-shadow-md`}>
                        <img src={sad} className='h-[3rem] w-[3rem]' style={{pointerEvents:'none'}}/>
                        <p className='ms-2' style={{pointerEvents:'none'}}>Sad</p>
                    </button>
                    <button onClick={(e)=>{setEmojis(e)}}  id='angry' className={`${emoji === 'angry' ? 'bg-slate-500':''} w-40 flex items-center px-3 py-2 rounded-lg hover:bg-slate-500 hover:drop-shadow-md`}>
                        <img src={angry} className='h-[3rem] w-[3rem]' style={{pointerEvents:'none'}}/>
                        <p className='ms-2' style={{pointerEvents:'none'}}>Angry</p>
                    </button>
                    <button onClick={(e)=>{setEmojis(e)}}  id='crying' className={`${emoji === 'crying' ? 'bg-slate-500':''} w-40 flex items-center px-3 py-2 rounded-lg hover:bg-slate-500 hover:drop-shadow-md`}>
                        <img src={crying} className='h-[3rem] w-[3rem]' style={{pointerEvents:'none'}}/>
                        <p className='ms-2' style={{pointerEvents:'none'}}>Crying</p>
                    </button>
                    <button onClick={(e)=>{setEmojis(e)}}  id='surprised' className={`${emoji === 'surprised' ? 'bg-slate-500':''} w-40 flex items-center px-3 py-2 rounded-lg hover:bg-slate-500 hover:drop-shadow-md`}>
                        <img src={surprised} className='h-[3rem] w-[3rem]' style={{pointerEvents:'none'}}/>
                        <p className='ms-2' style={{pointerEvents:'none'}}>Surprised</p>
                    </button>
                    <button onClick={(e)=>{setEmojis(e)}}  id='shy' className={`${emoji === 'shy' ? 'bg-slate-500':''} w-40 flex items-center px-3 py-2 rounded-lg hover:bg-slate-500 hover:drop-shadow-md`}>
                        <img src={shy} className='h-[3rem] w-[3rem]' style={{pointerEvents:'none'}}/>
                        <p className='ms-2' style={{pointerEvents:'none'}}>Shy</p>
                    </button>
                </div>
            </div>
            <button className='bg-[rgb(237,162,8)] flex items-center justify-center p-3 text-xl drop-shadow-md rounded-lg mt-5' onClick={(e)=>{postMessage(e)}}>
                <span className='me-1'>
                    <HiOutlineChat/>
                </span>
                Post
            </button>
        </form>
    </div>
  )
}

export default AddMessage