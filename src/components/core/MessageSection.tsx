import { Ellipsis, Link, Mic } from 'lucide-react'
import React from 'react'

const MessageSection = () => {
  return (
    <div className='msg-sec w-[37%]'>
      <div className='flex justify-between p-5 border-2 border-gray-200 border-l-0 items-center'>
        <h2 className='font-semibold text-[18px]'>Lucky Backyards Support</h2>
        <div className='bg-gray-200 rounded-full w-11 h-11 flex items-center justify-center cursor-pointer'>
          <Ellipsis width={20} height={20} />
        </div>
      </div>
      <div className='py-5 px-4 flex border-2 border-gray-200 border-t-0 border-l-0 min-h-[71vh] justify-around items-center relative'>
        <div>
          {/* Sender and Reciever Msg code */}
        </div>
        <div className='msg-input absolute bottom-4 flex gap-2'>
          <div className="bell-icon bg-gray-200 rounded-full w-11 h-11 flex items-center justify-center cursor-pointer">
            <Mic width={20} height={20}/>
          </div>
          <div className="bell-icon bg-gray-200 rounded-full w-11 h-11 flex items-center justify-center cursor-pointer">
            <Link width={20} height={20}/>
          </div>
          <div className='input border-2 border-gray-200 w-[350px] p-2 border-rad rounded-[500px]'>
            <input type="text" placeholder='Type a Message' className='w-[100%] border-0 outline-none' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageSection