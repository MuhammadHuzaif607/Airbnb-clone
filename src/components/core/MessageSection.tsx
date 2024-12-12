import { Ellipsis, Link, Mic } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Chat from '@/images/chat-pic.png';
import Profile from '@/images/profile.png';

const MessageSection = () => {
  return (
    <div className="msg-sec w-[37%]">
      <div className="flex justify-between p-5 border-2 border-gray-200 border-l-0 items-center">
        <h2 className="font-semibold text-[18px]">Lucky Backyards Support</h2>
        <div className="bg-gray-200 rounded-full w-11 h-11 flex items-center justify-center cursor-pointer">
          <Ellipsis width={20} height={20} />
        </div>
      </div>
      <div className="py-5 px-4  border-2 border-gray-200 border-t-0 border-l-0 min-h-[71vh] justify-between items-center relative">
        <div className="messages flex flex-col gap-y-3">
          <div className="sender">
            <div className="flex  gap-x-2 items-center mb-2">
              <Image src={Chat} width={30} height={30} alt=""></Image>
              <p className="text-sm text-text">
                Lucky Backyards Support, 1:23 PM
              </p>
            </div>
            <div className="rounded-2xl rounded-tl-none py-3 px-4 bg-sky-50 ">
              Hi Thanks For Contacting Us .we&apos;re here to give you support
            </div>
          </div>
          <div className="reciever flex flex-col items-end gap-y-2">
            <div className="flex  gap-x-2 items-center mb-2">
              <p className="text-sm text-text">1:23 PM</p>
              <Image
                src={Profile}
                width={30}
                height={30}
                alt="profile pic"
              ></Image>
            </div>
            <div className="bg-gray-300 py-3 px-4 rounded-2xl rounded-tr-none">
              I need help with a different reservation
            </div>
          </div>
        </div>
        <div className="msg-input absolute bottom-4 flex gap-2">
          <div className="bell-icon bg-gray-200 rounded-full w-11 h-11 flex items-center justify-center cursor-pointer">
            <Mic width={20} height={20} />
          </div>
          <div className="bell-icon bg-gray-200 rounded-full w-11 h-11 flex items-center justify-center cursor-pointer">
            <Link width={20} height={20} />
          </div>
          <div className="input border-2 border-gray-200 w-[350px] p-2 border-rad rounded-[500px]">
            <input
              type="text"
              placeholder="Type a Message"
              className="w-[100%] border-0 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;
