import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';
import Image from 'next/image';

const Suggestions = () => {
  return (
    <section className="py-[70px]">
      <div className="px-3">
        <h2 className="text-text text-4xl font-medium pb-7">
          Suggestions For You
        </h2>
      </div>
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem className="basis-1/6">
            <Link href="https://luckybackyards.com/staging/property/demetriou-paradisos-sea-view/">
              <div className="img-box relative">
                <Image
                  src="https://luckybackyards.com/staging/wp-content/uploads/2024/06/villa3-1-250x220-1.jpeg"
                  width={142}
                  height={300}
                  alt=""
                  className="rounded-[20px] object-cover h-[300px] w-full"
                ></Image>
                <div className="content-box absolute bottom-0 flex px-3 py-4 w-full justify-between items-center">
                  <div className="text">
                    <p className="text-white text-md font-medium">Cyprus</p>
                  </div>
                  <div className="bg-slate-300 rounded-[50px] w-[40px] h-[40px] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className='className="text-white  w-[20px] h-[20px] text-lg  rounded-[100%] duration-300"'
                    >
                      <path
                        className="fill-white"
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-1/6">
            <Link href="https://luckybackyards.com/staging/property/demetriou-paradisos-sea-view/">
              <div className="img-box relative">
                <Image
                  src="https://luckybackyards.com/staging/wp-content/uploads/2024/06/villa3-1-250x220-1.jpeg"
                  width={142}
                  height={300}
                  alt=""
                  className="rounded-[20px] object-cover h-[300px] w-full"
                ></Image>
                <div className="content-box absolute bottom-0 flex px-3 py-4 w-full justify-between items-center">
                  <div className="text">
                    <p className="text-white text-md font-medium">Cyprus</p>
                  </div>
                  <div className="bg-slate-300 rounded-[50px] w-[40px] h-[40px] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className='className="text-white  w-[20px] h-[20px] text-lg  rounded-[100%] duration-300"'
                    >
                      <path
                        className="fill-white"
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-1/6">
            <Link href="https://luckybackyards.com/staging/property/demetriou-paradisos-sea-view/">
              <div className="img-box relative">
                <Image
                  src="https://luckybackyards.com/staging/wp-content/uploads/2024/06/villa3-1-250x220-1.jpeg"
                  width={142}
                  height={300}
                  alt=""
                  className="rounded-[20px] object-cover h-[300px] w-full"
                ></Image>
                <div className="content-box absolute bottom-0 flex px-3 py-4 w-full justify-between items-center">
                  <div className="text">
                    <p className="text-white text-md font-medium">Cyprus</p>
                  </div>
                  <div className="bg-slate-300 rounded-[50px] w-[40px] h-[40px] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className='className="text-white  w-[20px] h-[20px] text-lg  rounded-[100%] duration-300"'
                    >
                      <path
                        className="fill-white"
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-1/6">
            <Link href="https://luckybackyards.com/staging/property/demetriou-paradisos-sea-view/">
              <div className="img-box relative">
                <Image
                  src="https://luckybackyards.com/staging/wp-content/uploads/2024/06/villa3-1-250x220-1.jpeg"
                  width={142}
                  height={300}
                  alt=""
                  className="rounded-[20px] object-cover h-[300px] w-full"
                ></Image>
                <div className="content-box absolute bottom-0 flex px-3 py-4 w-full justify-between items-center">
                  <div className="text">
                    <p className="text-white text-md font-medium">Cyprus</p>
                  </div>
                  <div className="bg-slate-300 rounded-[50px] w-[40px] h-[40px] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className='className="text-white  w-[20px] h-[20px] text-lg  rounded-[100%] duration-300"'
                    >
                      <path
                        className="fill-white"
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-1/6">
            <Link href="https://luckybackyards.com/staging/property/demetriou-paradisos-sea-view/">
              <div className="img-box relative">
                <Image
                  src="https://luckybackyards.com/staging/wp-content/uploads/2024/06/villa3-1-250x220-1.jpeg"
                  width={142}
                  height={300}
                  alt=""
                  className="rounded-[20px] object-cover h-[300px] w-full"
                ></Image>
                <div className="content-box absolute bottom-0 flex px-3 py-4 w-full justify-between items-center">
                  <div className="text">
                    <p className="text-white text-md font-medium">Cyprus</p>
                  </div>
                  <div className="bg-slate-300 rounded-[50px] w-[40px] h-[40px] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className='className="text-white  w-[20px] h-[20px] text-lg  rounded-[100%] duration-300"'
                    >
                      <path
                        className="fill-white"
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-1/6">
            <Link href="https://luckybackyards.com/staging/property/demetriou-paradisos-sea-view/">
              <div className="img-box relative">
                <Image
                  src="https://luckybackyards.com/staging/wp-content/uploads/2024/06/villa3-1-250x220-1.jpeg"
                  width={142}
                  height={300}
                  alt=""
                  className="rounded-[20px] object-cover h-[300px] w-full"
                ></Image>
                <div className="content-box absolute bottom-0 flex px-3 py-4 w-full justify-between items-center">
                  <div className="text">
                    <p className="text-white text-md font-medium">Cyprus</p>
                  </div>
                  <div className="bg-slate-300 rounded-[50px] w-[40px] h-[40px] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className='className="text-white  w-[20px] h-[20px] text-lg  rounded-[100%] duration-300"'
                    >
                      <path
                        className="fill-white"
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-1/6">
            <Link href="https://luckybackyards.com/staging/property/demetriou-paradisos-sea-view/">
              <div className="img-box relative">
                <Image
                  src="https://luckybackyards.com/staging/wp-content/uploads/2024/06/villa3-1-250x220-1.jpeg"
                  width={142}
                  height={300}
                  alt=""
                  className="rounded-[20px] object-cover h-[300px] w-full"
                ></Image>
                <div className="content-box absolute bottom-0 flex px-3 py-4 w-full justify-between items-center">
                  <div className="text">
                    <p className="text-white text-md font-medium">Cyprus</p>
                  </div>
                  <div className="bg-slate-300  rounded-[50px] w-[40px] h-[40px] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className='className="text-white  w-[20px] h-[20px] text-lg  rounded-[100%] duration-300"'
                    >
                      <path
                        className="fill-white"
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Suggestions;
