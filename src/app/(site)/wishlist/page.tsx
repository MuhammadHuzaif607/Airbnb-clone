import Image from 'next/image';
import folder_empty from '@/app/public/images/folder_empty.png'
import Link from 'next/link';
import { Ellipsis, Upload } from 'lucide-react';

function Page() {
  return (
    <>
      <section className="h-screen grid place-content-center hidden ">
        <div>
          <Image
            src={folder_empty}
            width={150}
            height={134}
            alt=""
            className="mx-auto pb-6"
          ></Image>
          <div className="text-center">
            <h3 className="mb-0 text-text text-lg font-medium leading-[1.2] pb-5">
              WishList Empty
            </h3>
            <p className="font-normal tet-sm text-gray-400">
              This is where you see the listing you love <br /> Tap 💚 on a
              listing to add to Wish List
            </p>
          </div>
          <button className="text-text text-base rounded-full py-5 px-3 inline-flex items-center  gap-x-1 duration-300 text-center font-medium bg-white hover:text-main hover:bg-white hover:border-main mt-8 border-gray-400 border-[1px] mx-auto w-3/5 justify-center">
            Explore Listings
          </button>
        </div>
      </section>
      <section className="py-10 hidden">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="heading flex justify-between items-center pb-7 px-3">
            <h1 className="text-text text-4xl font-medium ">My Favourites</h1>
            <div className="options flex  gap-x-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <Upload width={16} height={16} />
              </div>
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <Ellipsis width={16} height={16} />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-y-5">
            <div className="main-icon-img-box w-1/3 px-3">
              <div className="img-box relative ">
                <div className="img-box-content absolute top-[10px] flex justify-between flex-nowrap items-center w-full  px-3 ">
                  <h6 className="text-text p-[10px] rounded-full bg-white font-semibold text-xs">
                    Guest Favorite
                  </h6>
                  <div
                    id="add-to-wishlist "
                    data-id="516"
                    className="w-[24px] cursor-pointer text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="heart"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <a href="https://luckybackyards.com/staging/property/amazing-private-pool-alpaca-experience/">
                  <Image
                    src="https://luckybackyards.com/staging/wp-content/uploads/2024/03/learning-for-guests-img-03.png"
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
                    href=""
                  >
                    Amazing Private Pool + Alpaca Experience
                  </Link>
                </div>
                <div className="location text-gray-400 text-base pt-1">
                  <p>Indonesia, Bali</p>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-1">
                  <p className="flex justify-between flex-row gap-x-1 items-center">
                    <svg
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.295 12.5L3.27 8.06316L0 5.07895L4.32 4.68421L6 0.5L7.68 4.68421L12 5.07895L8.73 8.06316L9.705 12.5L6 10.1474L2.295 12.5Z"
                        fill="#484848"
                      ></path>
                    </svg>
                    4.9 (279 reviews)
                  </p>
                  <div className="price-box flex gap-x-2 text-text  items-center">
                    <h4
                      className=" text-lg font-normal"
                      data-original-price="280"
                    >
                      $200
                    </h4>
                    <p className="text-base">/ hourly</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-icon-img-box w-1/3 px-3">
              <div className="img-box relative ">
                <div className="img-box-content absolute top-[10px] flex justify-between flex-nowrap items-center w-full  px-3 ">
                  <h6 className="text-text p-[10px] rounded-full bg-white font-semibold text-xs">
                    Guest Favorite
                  </h6>
                  <div
                    id="add-to-wishlist "
                    data-id="516"
                    className="w-[24px] cursor-pointer text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="heart"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <a href="https://luckybackyards.com/staging/property/amazing-private-pool-alpaca-experience/">
                  <Image
                    src="https://luckybackyards.com/staging/wp-content/uploads/2024/03/learning-for-guests-img-03.png"
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
                    href=""
                  >
                    Amazing Private Pool + Alpaca Experience
                  </Link>
                </div>
                <div className="location text-gray-400 text-base pt-1">
                  <p>Indonesia, Bali</p>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-1">
                  <p className="flex justify-between flex-row gap-x-1 items-center">
                    <svg
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.295 12.5L3.27 8.06316L0 5.07895L4.32 4.68421L6 0.5L7.68 4.68421L12 5.07895L8.73 8.06316L9.705 12.5L6 10.1474L2.295 12.5Z"
                        fill="#484848"
                      ></path>
                    </svg>
                    4.9 (279 reviews)
                  </p>
                  <div className="price-box flex gap-x-2 text-text  items-center">
                    <h4
                      className=" text-lg font-normal"
                      data-original-price="280"
                    >
                      $200
                    </h4>
                    <p className="text-base">/ hourly</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-icon-img-box w-1/3 px-3">
              <div className="img-box relative ">
                <div className="img-box-content absolute top-[10px] flex justify-between flex-nowrap items-center w-full  px-3 ">
                  <h6 className="text-text p-[10px] rounded-full bg-white font-semibold text-xs">
                    Guest Favorite
                  </h6>
                  <div
                    id="add-to-wishlist "
                    data-id="516"
                    className="w-[24px] cursor-pointer text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="heart"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <a href="https://luckybackyards.com/staging/property/amazing-private-pool-alpaca-experience/">
                  <Image
                    src="https://luckybackyards.com/staging/wp-content/uploads/2024/03/learning-for-guests-img-03.png"
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
                    href=""
                  >
                    Amazing Private Pool + Alpaca Experience
                  </Link>
                </div>
                <div className="location text-gray-400 text-base pt-1">
                  <p>Indonesia, Bali</p>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-1">
                  <p className="flex justify-between flex-row gap-x-1 items-center">
                    <svg
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.295 12.5L3.27 8.06316L0 5.07895L4.32 4.68421L6 0.5L7.68 4.68421L12 5.07895L8.73 8.06316L9.705 12.5L6 10.1474L2.295 12.5Z"
                        fill="#484848"
                      ></path>
                    </svg>
                    4.9 (279 reviews)
                  </p>
                  <div className="price-box flex gap-x-2 text-text  items-center">
                    <h4
                      className=" text-lg font-normal"
                      data-original-price="280"
                    >
                      $200
                    </h4>
                    <p className="text-base">/ hourly</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-icon-img-box w-1/3 px-3">
              <div className="img-box relative ">
                <div className="img-box-content absolute top-[10px] flex justify-between flex-nowrap items-center w-full  px-3 ">
                  <h6 className="text-text p-[10px] rounded-full bg-white font-semibold text-xs">
                    Guest Favorite
                  </h6>
                  <div
                    id="add-to-wishlist "
                    data-id="516"
                    className="w-[24px] cursor-pointer text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="heart"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <a href="https://luckybackyards.com/staging/property/amazing-private-pool-alpaca-experience/">
                  <Image
                    src="https://luckybackyards.com/staging/wp-content/uploads/2024/03/learning-for-guests-img-03.png"
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
                    href=""
                  >
                    Amazing Private Pool + Alpaca Experience
                  </Link>
                </div>
                <div className="location text-gray-400 text-base pt-1">
                  <p>Indonesia, Bali</p>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-1">
                  <p className="flex justify-between flex-row gap-x-1 items-center">
                    <svg
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.295 12.5L3.27 8.06316L0 5.07895L4.32 4.68421L6 0.5L7.68 4.68421L12 5.07895L8.73 8.06316L9.705 12.5L6 10.1474L2.295 12.5Z"
                        fill="#484848"
                      ></path>
                    </svg>
                    4.9 (279 reviews)
                  </p>
                  <div className="price-box flex gap-x-2 text-text  items-center">
                    <h4
                      className=" text-lg font-normal"
                      data-original-price="280"
                    >
                      $200
                    </h4>
                    <p className="text-base">/ hourly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 ">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="heading flex justify-between items-center pb-7 px-3">
            <h1 className="text-text text-4xl font-medium ">Wish List</h1>
          </div>
          <div className="flex flex-wrap gap-y-6 gap-x-6  ">
            <div className="wishlist relative w-[calc(32%)]">
              <div className="content-box absolute bottom-0 flex px-3 py-4 w-full justify-between items-center z-50">
                <div className="text">
                  <p className="text-white text-md font-medium">
                    My Favourites
                  </p>
                </div>
                <div className="bg-gray-400  rounded-[50px] w-[40px] h-[40px] flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className='className="text-white  w-[20px] h-[20px] text-lg  rounded-[100%] duration-300"'
                  >
                    <path
                      className="fill-white"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="img iniline before:content-{} before: inline before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gray-500 before:opacity-30 before:rounded-3xl ">
                <Image
                  src="https://luckybackyards.com/staging/wp-content/uploads/2024/03/learning-for-guests-img-03.png"
                  width={236}
                  height={205}
                  alt="Picture of the author"
                  className="w-full"
                />
              </div>
            </div>
            <div className="wishlist relative w-[calc(32%)]">
              <div className="content-box absolute bottom-0 flex px-3 py-4 w-full justify-between items-center z-50">
                <div className="text">
                  <p className="text-white text-md font-medium">
                    My Favourites
                  </p>
                </div>
                <div className="bg-gray-400  rounded-[50px] w-[40px] h-[40px] flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className='className="text-white  w-[20px] h-[20px] text-lg  rounded-[100%] duration-300"'
                  >
                    <path
                      className="fill-white"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="img iniline before:content-{} before: inline before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gray-500 before:opacity-30 before:rounded-3xl ">
                <Image
                  src="https://luckybackyards.com/staging/wp-content/uploads/2024/03/learning-for-guests-img-03.png"
                  width={236}
                  height={205}
                  alt="Picture of the author"
                  className="w-full"
                />
              </div>
            </div>
            <div className="wishlist relative w-[calc(32%)]">
              <div className="content-box absolute bottom-0 flex px-3 py-4 w-full justify-between items-center z-50">
                <div className="text">
                  <p className="text-white text-md font-medium">
                    My Favourites
                  </p>
                </div>
                <div className="bg-gray-400  rounded-[50px] w-[40px] h-[40px] flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className='className="text-white  w-[20px] h-[20px] text-lg  rounded-[100%] duration-300"'
                  >
                    <path
                      className="fill-white"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="img iniline before:content-{} before: inline before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gray-500 before:opacity-30 before:rounded-3xl ">
                <Image
                  src="https://luckybackyards.com/staging/wp-content/uploads/2024/03/learning-for-guests-img-03.png"
                  width={236}
                  height={205}
                  alt="Picture of the author"
                  className="w-full"
                />
              </div>
            </div>
            <div className="wishlist relative w-[calc(32%)]">
              <div className="content-box absolute bottom-0 flex px-3 py-4 w-full justify-between items-center z-50">
                <div className="text">
                  <p className="text-white text-md font-medium">
                    My Favourites
                  </p>
                </div>
                <div className="bg-gray-400  rounded-[50px] w-[40px] h-[40px] flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className='className="text-white  w-[20px] h-[20px] text-lg  rounded-[100%] duration-300"'
                  >
                    <path
                      className="fill-white"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="img iniline before:content-{} before: inline before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gray-500 before:opacity-30 before:rounded-3xl ">
                <Image
                  src="https://luckybackyards.com/staging/wp-content/uploads/2024/03/learning-for-guests-img-03.png"
                  width={236}
                  height={205}
                  alt="Picture of the author"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
