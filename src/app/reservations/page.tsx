import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Property_Img from '@/images/learning-for-guests-img-03.png';
import Bed from '@/images/bed.png';
import Bathroom from '@/images/bathroom.png';
import Wifi from '@/images/wifi.png';
import Author from '@/images/author.png';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Hourglass } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Page = () => {
  return (
    <section className="py-[70px] ">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="px-3">
          <h2 className="text-text text-4xl font-medium pb-7">Reservations</h2>
        </div>
        <Tabs defaultValue="pending">
          <TabsList className="flex gap-x-2 justify-start">
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
          <TabsContent value="pending">
            <div className="flex flex-wrap">
              <div className=" w-4/12 px-3">
                <div className="main-icon-img-box shadow-2xl rounded-2xl">
                  <div className="img-box relative">
                    <div className="img-box-content absolute bottom-[10px] right-[10px] px-3 rounded-full bg-white flex items-center">
                      <Hourglass color="#f4b900" size={15} />
                      <h6 className="text-yellow-500 p-[10px]  font-semibold text-sm">
                        Waiting
                      </h6>
                    </div>
                    <a href="https://luckybackyards.com/staging/property/amazing-private-pool-alpaca-experience/">
                      <Image
                        src={Property_Img}
                        width={236}
                        height={205}
                        alt="Picture of the author"
                        className="w-full"
                      />
                    </a>
                  </div>
                  <div className=" p-4">
                    <div className="flex justify-between flex-row items-start gap-x-2">
                      <Link
                        className="mb-0 text-text text-lg font-medium leading-[1.2]"
                        href="#"
                      >
                        Cottage With Pool
                      </Link>
                    </div>
                    <ul className="main-listing-cat flex flex-wrap gap-3 mt-3">
                      <li
                        className="flex flex-row items-center gap-x-[10px]"
                        key="1"
                      >
                        <Image src={Bed} width={24} height={24} alt="Bed" />
                        karachi
                      </li>

                      <li
                        className="flex flex-row items-center gap-x-[10px]"
                        key="2"
                      >
                        <Image
                          src={Bathroom}
                          width={24}
                          height={24}
                          alt="Bathroom"
                        />
                        Aug 10,2023
                      </li>

                      <li
                        className="flex flex-row items-center gap-x-[10px]"
                        key="3"
                      >
                        <Image src={Wifi} width={24} height={24} alt="Wifi" />
                        12:00PM - 2:00PM
                      </li>
                      <li
                        className="flex flex-row items-center gap-x-[10px]"
                        key="4"
                      >
                        <Image src={Wifi} width={24} height={24} alt="Wifi" />4
                        Guests
                      </li>
                    </ul>
                    <div className="mt-8 text-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className="px-3 border-br border-2 rounded-full py-2 text-base font-medium text-text"
                            variant={'outline'}
                          >
                            View Reservation
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <h4 className="text-text text-2xl font-medium pb-7 text-center">
                            Reservation Details
                          </h4>
                          <div className="flex flex-col gap-y-2">
                            <p>
                              <span className="text-black font-medium text-base">
                                Booking :{' '}
                              </span>{' '}
                              <span className="font-normal text-base text-text">
                                #470036
                              </span>
                            </p>
                            <p>
                              <span className="text-black font-medium text-base">
                                Name Reservation:{' '}
                              </span>{' '}
                              <span className="font-normal text-base text-text">
                                Cottage with Pool
                              </span>
                            </p>
                            <p>
                              <span className="text-black font-medium text-base">
                                Location:{' '}
                              </span>{' '}
                              <span className="font-normal text-base text-text">
                                {' '}
                                Los Angeles, California
                              </span>
                            </p>
                          </div>
                          <div className="person-img-box flex gap-x-4 items-center pb-3 border-b-2">
                            <Image
                              src={Author}
                              width={50}
                              height={50}
                              alt="Author"
                              className="rounded-full object-cover"
                              objectFit="cover"
                            ></Image>
                            <div className="text">
                              <h6 className="text-md text-black font-medium mb-1">
                                Hosted by Lucky backyard.
                              </h6>
                              <p className="text-xs text-gray-800">
                                Superhost · 7 years hosting
                              </p>
                            </div>
                          </div>
                          <p className="font-normal text-sm">
                            Hi! We are Jeremy from Belgium and Erle from Norway!
                            We met in Thailand and later in Australia by chance,
                            where we decided to travel and live in a
                            self-converted campervan together. Now we live close
                            to Oslo
                          </p>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-4/12 px-3">
                <div className="main-icon-img-box shadow-2xl">
                  <div className="img-box relative">
                    <div className="img-box-content absolute bottom-[10px] right-[10px] px-3 rounded-full bg-white flex items-center">
                      <Hourglass color="#f4b900" size={15} />
                      <h6 className="text-yellow-500 p-[10px]  font-semibold text-sm">
                        Waiting
                      </h6>
                    </div>
                    <a href="https://luckybackyards.com/staging/property/amazing-private-pool-alpaca-experience/">
                      <Image
                        src={Property_Img}
                        width={236}
                        height={205}
                        alt="Picture of the author"
                        className="w-full"
                      />
                    </a>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between flex-row items-start gap-x-2">
                      <Link
                        className="mb-0 text-text text-lg font-medium leading-[1.2]"
                        href="#"
                      >
                        Cottage With Pool
                      </Link>
                    </div>
                    <ul className="main-listing-cat flex flex-wrap gap-3 mt-3">
                      <li
                        className="flex flex-row items-center gap-x-[10px]"
                        key="1"
                      >
                        <Image src={Bed} width={24} height={24} alt="Bed" />
                        karachi
                      </li>

                      <li
                        className="flex flex-row items-center gap-x-[10px]"
                        key="2"
                      >
                        <Image
                          src={Bathroom}
                          width={24}
                          height={24}
                          alt="Bathroom"
                        />
                        Aug 10,2023
                      </li>

                      <li
                        className="flex flex-row items-center gap-x-[10px]"
                        key="3"
                      >
                        <Image src={Wifi} width={24} height={24} alt="Wifi" />
                        12:00PM - 2:00PM
                      </li>
                      <li
                        className="flex flex-row items-center gap-x-[10px]"
                        key="4"
                      >
                        <Image src={Wifi} width={24} height={24} alt="Wifi" />4
                        Guests
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8 text-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="px-3 border-br border-2 rounded-full py-2 text-base font-medium text-text"
                          variant={'outline'}
                        >
                          View Reservation
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]"></DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
              <div className=" w-4/12 px-3">
                <div className="main-icon-img-box shadow-2xl">
                  <div className="img-box relative">
                    <div className="img-box-content absolute bottom-[10px] right-[10px] px-3 rounded-full bg-white flex items-center">
                      <Hourglass color="#f4b900" size={15} />
                      <h6 className="text-yellow-500 p-[10px]  font-semibold text-sm">
                        Waiting
                      </h6>
                    </div>
                    <a href="https://luckybackyards.com/staging/property/amazing-private-pool-alpaca-experience/">
                      <Image
                        src={Property_Img}
                        width={236}
                        height={205}
                        alt="Picture of the author"
                        className="w-full"
                      />
                    </a>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between flex-row items-start gap-x-2">
                      <Link
                        className="mb-0 text-text text-lg font-medium leading-[1.2]"
                        href="#"
                      >
                        Cottage With Pool
                      </Link>
                    </div>
                    <ul className="main-listing-cat flex flex-wrap gap-3 mt-3">
                      <li
                        className="flex flex-row items-center gap-x-[10px]"
                        key="1"
                      >
                        <Image src={Bed} width={24} height={24} alt="Bed" />
                        karachi
                      </li>

                      <li
                        className="flex flex-row items-center gap-x-[10px]"
                        key="2"
                      >
                        <Image
                          src={Bathroom}
                          width={24}
                          height={24}
                          alt="Bathroom"
                        />
                        Aug 10,2023
                      </li>

                      <li
                        className="flex flex-row items-center gap-x-[10px]"
                        key="3"
                      >
                        <Image src={Wifi} width={24} height={24} alt="Wifi" />
                        12:00PM - 2:00PM
                      </li>
                      <li
                        className="flex flex-row items-center gap-x-[10px]"
                        key="4"
                      >
                        <Image src={Wifi} width={24} height={24} alt="Wifi" />4
                        Guests
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8 text-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="px-3 border-br border-2 rounded-full py-2 text-base font-medium text-text"
                          variant={'outline'}
                        >
                          View Reservation
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]"></DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="password"></TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Page;
