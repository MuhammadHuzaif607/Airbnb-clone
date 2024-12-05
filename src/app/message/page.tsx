import ContactSection from '@/components/core/ContactSection'
import MessageDetail from '@/components/core/MessageDetail'
import MessageSection from '@/components/core/MessageSection'
import MsgHeader from '@/components/core/MsgHeader'
import React from 'react'

const Message = () => {
  return (
    <div>
        <MsgHeader/>
        <div className='flex'>
          <ContactSection />
          <MessageSection />
          <MessageDetail />
        </div>
    </div>
  )
}

export default Message