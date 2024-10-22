'use client';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { useState } from 'react';

export default function Page() {
  const [data, setData] = useState({
    Adults: 0,
    Children: 0,
    Infants: 0,
    Pets: 0,
  });
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="top-content w-[calc(31%)] px-7">
          <h6 className="text-base text-text font-medium">Who</h6>
          <p className="text-sm text-gray-400">
            Adults {data.Adults}, Childrens {data.Children}, Infant{' '}
            {data.Infants}, Pets {data.Pets}
          </p>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 py-0 px-5">
        <div className="custom-number">
          <div className=" flex justify-between py-5 border-slate-300 border-b-[1px]">
            <div className="content">
              <h6 className="font-medium text-lg text-black">Adults</h6>
              <p className="text-sm text-text">Ages 13 or above</p>
            </div>
            <div className="flex items-center">
              <button
                className="border-[1px] border-black w-6 h-6  rounded-full flex items-center justify-center text-black cursor-pointer"
                onClick={() => {
                  setData((prevData) => {
                    if (prevData.Adults > 0) {
                      return {
                        ...prevData,
                        Adults: prevData.Adults - 1,
                      };
                    }
                    return {
                      ...prevData,
                    };
                  });
                }}
              >
                -
              </button>
              <p className="w-10 text-center font-semibold text-text ">
                {data.Adults}
              </p>
              <button
                className="border-[1px] border-black w-6 h-6  rounded-full flex items-center justify-center text-black cursor-pointer"
                onClick={() => {
                  setData((prevData) => {
                    return {
                      ...prevData,
                      Adults: prevData.Adults + 1,
                    };
                  });
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className=" flex justify-between py-5 border-slate-300 border-b-[1px]">
            <div className="content">
              <h6 className="font-medium text-lg text-black">Children</h6>
              <p className="text-sm text-text">Ages 13 or above</p>
            </div>
            <div className="flex items-center">
              <button
                className="border-[1px] border-black w-6 h-6  rounded-full flex items-center justify-center text-black cursor-pointer"
                onClick={() => {
                  setData((prevData) => {
                    if (prevData.Children > 0) {
                      return {
                        ...prevData,
                        Children: prevData.Children - 1,
                      };
                    }
                    return {
                      ...prevData,
                    };
                  });
                }}
              >
                -
              </button>
              <p className="w-10 text-center font-semibold text-text ">
                {data.Children}
              </p>
              <button
                className="border-[1px] border-black w-6 h-6  rounded-full flex items-center justify-center text-black cursor-pointer"
                onClick={() => {
                  setData((prevData) => {
                    return {
                      ...prevData,
                      Children: prevData.Children + 1,
                    };
                  });
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className=" flex justify-between py-5 border-slate-300 border-b-[1px]">
            <div className="content">
              <h6 className="font-medium text-lg text-black">Infanst</h6>
              <p className="text-sm text-text">Ages 13 or above</p>
            </div>
            <div className="flex items-center">
              <button
                className="border-[1px] border-black w-6 h-6  rounded-full flex items-center justify-center text-black cursor-pointer"
                onClick={() => {
                  setData((prevData) => {
                    if (prevData.Infants > 0) {
                      return {
                        ...prevData,
                        Infants: prevData.Infants - 1,
                      };
                    }
                    return {
                      ...prevData,
                    };
                  });
                }}
              >
                -
              </button>
              <p className="w-10 text-center font-semibold text-text ">
                {data.Infants}
              </p>
              <button
                className="border-[1px] border-black w-6 h-6  rounded-full flex items-center justify-center text-black cursor-pointer"
                onClick={() => {
                  setData((prevData) => {
                    return {
                      ...prevData,
                      Infants: prevData.Infants + 1,
                    };
                  });
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className=" flex justify-between py-5 border-slate-300 border-b-[1px]">
            <div className="content">
              <h6 className="font-medium text-lg text-black">Pets</h6>
              <p className="text-sm text-text">Ages 13 or above</p>
            </div>
            <div className="flex items-center">
              <button
                className="border-[1px] border-black w-6 h-6  rounded-full flex items-center justify-center text-black cursor-pointer"
                onClick={() => {
                  setData((prevData) => {
                    if (prevData.Pets > 0) {
                      return {
                        ...prevData,
                        Pets: prevData.Pets - 1,
                      };
                    }
                    return {
                      ...prevData,
                    };
                  });
                }}
              >
                -
              </button>
              <p className="w-10 text-center font-semibold text-text ">
                {data.Pets}
              </p>
              <button
                className="border-[1px] border-black w-6 h-6  rounded-full flex items-center justify-center text-black cursor-pointer"
                onClick={() => {
                  setData((prevData) => {
                    return {
                      ...prevData,
                      Pets: prevData.Pets + 1,
                    };
                  });
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
