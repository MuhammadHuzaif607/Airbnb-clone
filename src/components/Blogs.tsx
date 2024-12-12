import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Img from '@/images/Pickleball.jpg';

const Blogs = () => {
  return (
    <section className="py-[70px]">
      <div className="px-3">
        <h2 className="text-text text-4xl font-medium pb-7">
          Read from our blog and plan holiday adventures
        </h2>
      </div>
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem className="basis-1/5">
            <div
              className="img-box"
              style={{ width: '100%', display: 'inline-block' }}
            >
              <Link href="https://luckybackyards.com/staging/fantasy-house-booking-destinations-you-can-visit/">
                <Image src={Img} alt="" width={300} height={300} className='rounded-lg'></Image>
              </Link>
              <ul className="flex flex-wrap gap-2 py-2">
                <li>
                  <Link
                    href="https://luckybackyards.com/staging/category/fishing/"
                    className="text-sm font-normal text-text px-[12px] py-1 rounded-full duration-200  bg-sec_main "
                  >
                    Fishing{' '}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://luckybackyards.com/staging/category/grilling/"
                    className="text-sm font-normal text-text px-[12px] py-1 rounded-full duration-200  bg-sec_main "
                  >
                    Grilling{' '}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://luckybackyards.com/staging/category/pool/"
                    className="text-sm font-normal text-text px-[12px] py-1 rounded-full duration-200  bg-sec_main "
                  >
                    Pool{' '}
                  </Link>
                </li>
              </ul>

              <div className="text">
                <Link
                  href="https://luckybackyards.com/staging/fantasy-house-booking-destinations-you-can-visit/"
                  className="text-text text-2xl font-medium duration-300"
                >
                  Fantasy House Booking Destinations You Can Visit
                </Link>
                <div className="icon">
                  <p className="flex gap-x-1 items-center pt-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="text-white  w-[14px] h-[14px] text-lg  rounded-[100%] duration-300"
                    >
                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                    </svg>
                    1 mins
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <div
              className="img-box"
              style={{ width: '100%', display: 'inline-block' }}
            >
              <Link href="https://luckybackyards.com/staging/fantasy-house-booking-destinations-you-can-visit/">
                <Image src={Img} alt="" width={300} height={300} className='rounded-lg'></Image>
              </Link>
              <ul className="flex flex-wrap gap-2 py-2">
                <li>
                  <Link
                    href="https://luckybackyards.com/staging/category/fishing/"
                    className="text-sm font-normal text-text px-[12px] py-1 rounded-full duration-200  bg-sec_main "
                  >
                    Fishing{' '}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://luckybackyards.com/staging/category/grilling/"
                    className="text-sm font-normal text-text px-[12px] py-1 rounded-full duration-200  bg-sec_main "
                  >
                    Grilling{' '}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://luckybackyards.com/staging/category/pool/"
                    className="text-sm font-normal text-text px-[12px] py-1 rounded-full duration-200  bg-sec_main "
                  >
                    Pool{' '}
                  </Link>
                </li>
              </ul>

              <div className="text">
                <Link
                  href="https://luckybackyards.com/staging/fantasy-house-booking-destinations-you-can-visit/"
                  className="text-text text-2xl font-medium duration-300"
                >
                  Fantasy House Booking Destinations You Can Visit
                </Link>
                <div className="icon">
                  <p className="flex gap-x-1 items-center pt-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="text-white  w-[14px] h-[14px] text-lg  rounded-[100%] duration-300"
                    >
                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                    </svg>
                    1 mins
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <div
              className="img-box"
              style={{ width: '100%', display: 'inline-block' }}
            >
              <Link href="https://luckybackyards.com/staging/fantasy-house-booking-destinations-you-can-visit/">
                <Image src={Img} alt="" width={300} height={300} className='rounded-lg'></Image>
              </Link>
              <ul className="flex flex-wrap gap-2 py-2">
                <li>
                  <Link
                    href="https://luckybackyards.com/staging/category/fishing/"
                    className="text-sm font-normal text-text px-[12px] py-1 rounded-full duration-200  bg-sec_main "
                  >
                    Fishing{' '}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://luckybackyards.com/staging/category/grilling/"
                    className="text-sm font-normal text-text px-[12px] py-1 rounded-full duration-200  bg-sec_main "
                  >
                    Grilling{' '}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://luckybackyards.com/staging/category/pool/"
                    className="text-sm font-normal text-text px-[12px] py-1 rounded-full duration-200  bg-sec_main "
                  >
                    Pool{' '}
                  </Link>
                </li>
              </ul>

              <div className="text">
                <Link
                  href="https://luckybackyards.com/staging/fantasy-house-booking-destinations-you-can-visit/"
                  className="text-text text-2xl font-medium duration-300"
                >
                  Fantasy House Booking Destinations You Can Visit
                </Link>
                <div className="icon">
                  <p className="flex gap-x-1 items-center pt-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="text-white  w-[14px] h-[14px] text-lg  rounded-[100%] duration-300"
                    >
                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                    </svg>
                    1 mins
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <div
              className="img-box"
              style={{ width: '100%', display: 'inline-block' }}
            >
              <Link href="https://luckybackyards.com/staging/fantasy-house-booking-destinations-you-can-visit/">
                <Image src={Img} alt="" width={300} height={300} className='rounded-lg'></Image>
              </Link>
              <ul className="flex flex-wrap gap-2 py-2">
                <li>
                  <Link
                    href="https://luckybackyards.com/staging/category/fishing/"
                    className="text-sm font-normal text-text px-[12px] py-1 rounded-full duration-200  bg-sec_main "
                  >
                    Fishing{' '}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://luckybackyards.com/staging/category/grilling/"
                    className="text-sm font-normal text-text px-[12px] py-1 rounded-full duration-200  bg-sec_main "
                  >
                    Grilling{' '}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://luckybackyards.com/staging/category/pool/"
                    className="text-sm font-normal text-text px-[12px] py-1 rounded-full duration-200  bg-sec_main "
                  >
                    Pool{' '}
                  </Link>
                </li>
              </ul>

              <div className="text">
                <Link
                  href="https://luckybackyards.com/staging/fantasy-house-booking-destinations-you-can-visit/"
                  className="text-text text-2xl font-medium duration-300"
                >
                  Fantasy House Booking Destinations You Can Visit
                </Link>
                <div className="icon">
                  <p className="flex gap-x-1 items-center pt-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="text-white  w-[14px] h-[14px] text-lg  rounded-[100%] duration-300"
                    >
                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                    </svg>
                    1 mins
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <div
              className="img-box"
              style={{ width: '100%', display: 'inline-block' }}
            >
              <Link href="https://luckybackyards.com/staging/fantasy-house-booking-destinations-you-can-visit/">
                <Image src={Img} alt="" width={300} height={300} className='rounded-lg'></Image>
              </Link>
              <ul className="flex flex-wrap gap-2 py-2">
                <li>
                  <Link
                    href="https://luckybackyards.com/staging/category/fishing/"
                    className="text-sm font-normal text-text px-[12px] py-1 rounded-full duration-200  bg-sec_main "
                  >
                    Fishing{' '}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://luckybackyards.com/staging/category/grilling/"
                    className="text-sm font-normal text-text px-[12px] py-1 rounded-full duration-200  bg-sec_main "
                  >
                    Grilling{' '}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://luckybackyards.com/staging/category/pool/"
                    className="text-sm font-normal text-text px-[12px] py-1 rounded-full duration-200  bg-sec_main "
                  >
                    Pool{' '}
                  </Link>
                </li>
              </ul>

              <div className="text">
                <Link
                  href="https://luckybackyards.com/staging/fantasy-house-booking-destinations-you-can-visit/"
                  className="text-text text-2xl font-medium duration-300"
                >
                  Fantasy House Booking Destinations You Can Visit
                </Link>
                <div className="icon">
                  <p className="flex gap-x-1 items-center pt-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="text-white  w-[14px] h-[14px] text-lg  rounded-[100%] duration-300"
                    >
                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                    </svg>
                    1 mins
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <div
              className="img-box"
              style={{ width: '100%', display: 'inline-block' }}
            >
              <Link href="https://luckybackyards.com/staging/fantasy-house-booking-destinations-you-can-visit/">
                <Image src={Img} alt="" width={300} height={300} className='rounded-lg'></Image>
              </Link>
              <ul className="flex flex-wrap gap-2 py-2">
                <li>
                  <Link
                    href="https://luckybackyards.com/staging/category/fishing/"
                    className="text-sm font-normal text-text px-[12px] py-1 rounded-full duration-200  bg-sec_main "
                  >
                    Fishing{' '}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://luckybackyards.com/staging/category/grilling/"
                    className="text-sm font-normal text-text px-[12px] py-1 rounded-full duration-200  bg-sec_main "
                  >
                    Grilling{' '}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://luckybackyards.com/staging/category/pool/"
                    className="text-sm font-normal text-text px-[12px] py-1 rounded-full duration-200  bg-sec_main "
                  >
                    Pool{' '}
                  </Link>
                </li>
              </ul>

              <div className="text">
                <Link
                  href="https://luckybackyards.com/staging/fantasy-house-booking-destinations-you-can-visit/"
                  className="text-text text-2xl font-medium duration-300"
                >
                  Fantasy House Booking Destinations You Can Visit
                </Link>
                <div className="icon">
                  <p className="flex gap-x-1 items-center pt-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="text-white  w-[14px] h-[14px] text-lg  rounded-[100%] duration-300"
                    >
                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                    </svg>
                    1 mins
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <div
              className="img-box"
              style={{ width: '100%', display: 'inline-block' }}
            >
              <Link href="https://luckybackyards.com/staging/fantasy-house-booking-destinations-you-can-visit/">
                <Image src={Img} alt="" width={300} height={300} className='rounded-lg'></Image>
              </Link>
              <ul className="flex flex-wrap gap-2 py-2">
                <li>
                  <Link
                    href="https://luckybackyards.com/staging/category/fishing/"
                    className="text-sm font-normal text-text px-[12px] py-1 rounded-full duration-200  bg-sec_main "
                  >
                    Fishing{' '}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://luckybackyards.com/staging/category/grilling/"
                    className="text-sm font-normal text-text px-[12px] py-1 rounded-full duration-200  bg-sec_main "
                  >
                    Grilling{' '}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://luckybackyards.com/staging/category/pool/"
                    className="text-sm font-normal text-text px-[12px] py-1 rounded-full duration-200  bg-sec_main "
                  >
                    Pool{' '}
                  </Link>
                </li>
              </ul>

              <div className="text">
                <Link
                  href="https://luckybackyards.com/staging/fantasy-house-booking-destinations-you-can-visit/"
                  className="text-text text-2xl font-medium duration-300"
                >
                  Fantasy House Booking Destinations You Can Visit
                </Link>
                <div className="icon">
                  <p className="flex gap-x-1 items-center pt-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="text-white  w-[14px] h-[14px] text-lg  rounded-[100%] duration-300"
                    >
                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                    </svg>
                    1 mins
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Blogs;
