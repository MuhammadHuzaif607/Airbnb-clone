import { ListFilter } from 'lucide-react';
import React from 'react';
import Users from '@/users.json';
import Chat from '@/images/chat-pic.png';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <div className="contact-sec w-[33%]">
      <div className="flex justify-between p-5 border-2 border-gray-200 items-center">
        <h2 className="font-semibold text-[18px]">Messages</h2>
        <div className="bg-gray-200 rounded-full w-11 h-11 flex items-center justify-center cursor-pointer">
          <ListFilter width={20} height={20} />
        </div>
      </div>
      <div className="min-h-[71vh] border-2 border-gray-200 border-t-0 border-l-0">
        {Users.users.map((item, index) => {
          return (
            <div
              className="py-5 px-4 flex border-b-2 justify-around items-center hover:bg-gray-200 cursor-pointer"
              key={index}
            >
              <div className="">
                <Image src={Chat} width={50} height={50} alt=""></Image>
              </div>
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p>Do you need help with this reservat...</p>
              </div>
              <div>
                <p>1:32 PM</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactSection;
