import React from 'react';
import Image from 'next/image';
import Single_property from '@/components/Single_property';
import Property_form from '@/components/Property_form';
// import Search from '@/components/Search';



const Page = () => {
  return (
    <>
    {/* <Search /> */}
      <section >
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="pb-5">
            <div className="text-text text-2xl font-medium my-3">
              <h3>Cave in Noyers-sur-Cher, France</h3>
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="box-01">
                <ul className="flex gap-x-4">
                  <li>
                    <a className="flex gap-x-1 items-center">
                      <Image
                        src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/amazing-icon-01.png"
                        alt=""
                        width={16}
                        height={17}
                      ></Image>
                      3.6
                    </a>
                  </li>
                  <li>
                    <a className="flex gap-x-1 items-center">
                      <Image
                        src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/amazing-icon-02.png"
                        alt=""
                        width={10}
                        height={10}
                      ></Image>{' '}
                      5 Reviews{' '}
                    </a>
                  </li>
                  <li>
                    <a className="flex gap-x-1 items-center">
                      <Image
                        src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/amazing-icon-03.png"
                        alt=""
                        width={10}
                        height={10}
                      ></Image>{' '}
                      Los Angeles, California{' '}
                    </a>
                  </li>
                  <li className="flex gap-x-1">
                    <a className="flex gap-x-1 items-center">
                      <Image
                        src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/amazing-icon-05.png"
                        alt=""
                        width={10}
                        height={10}
                      ></Image>
                      4
                    </a>
                  </li>
                  <li className="flex gap-x-1">
                    <a className="flex gap-x-1 items-center">
                      <Image
                        src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/amazing-icon-06.png"
                        alt=""
                        width={10}
                        height={10}
                      ></Image>
                      3
                    </a>
                  </li>
                </ul>
              </div>
              <div className="main-icon-img-box">
                <ul className="flex flex-wrap gap-3">
                  <li className="d-flex gap-1 align-items-center">
                    <div
                      id="add-to-wishlist-single "
                      data-id="559"
                      className="flex  items-center gap-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-2 h-2 "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        ></path>
                      </svg>
                      Add to Favorites
                    </div>
                  </li>
                  <li
                    className="main-icon-img-box single-property "
                    id="btn-share-property"
                    data-id="559"
                  >
                    <a className="flex  items-center gap-x-1">
                      <Image
                        src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/amazing-icon-08.png"
                        alt=""
                        width={10}
                        height={10}
                      ></Image>
                      Share
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" gallery flex flex-wrap">
            <div className="w-1/2 px-3">
              <Image
                src="https://luckybackyards.com/staging/wp-content/uploads/2024/03/ideas-for-family-travel-img-01.png"
                width={570}
                height={510}
                alt=""
                layout="responsive"
              ></Image>
            </div>
            <div className="w-1/2 flex flex-wrap gap-y-3">
              <div className="w-1/2 px-2">
                <Image
                  src="https://luckybackyards.com/staging/wp-content/uploads/2024/03/ideas-for-family-travel-img-01.png"
                  width={257}
                  height={248}
                  alt=""
                ></Image>
              </div>
              <div className="w-1/2 px-2">
                <Image
                  src="https://luckybackyards.com/staging/wp-content/uploads/2024/03/ideas-for-family-travel-img-01.png"
                  width={257}
                  height={248}
                  alt=""
                ></Image>
              </div>
              <div className="w-1/2 px-2">
                <Image
                  src="https://luckybackyards.com/staging/wp-content/uploads/2024/03/ideas-for-family-travel-img-01.png"
                  width={257}
                  height={248}
                  alt=""
                ></Image>
              </div>
              <div className="w-1/2 px-2">
                <Image
                  src="https://luckybackyards.com/staging/wp-content/uploads/2024/03/ideas-for-family-travel-img-01.png"
                  width={257}
                  height={248}
                  alt=""
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="w-full">
            <div className="main-drop-listing pt-6">
              <ul className="flex justify-between pb-3 border-b-2 border-b-slate-300">
                <li>
                  <a
                    href="#in-page-link-01"
                    className="relative block hover:after:content-[''] hover:after:block hover:after:bg-black hover:after:w-[105%] hover:after:h-[2px] hover:after:absolute hover:after:bottom-[-13px] hover:after:left-0 hover:after:right-0 hover:after:transition-all hover:after:duration-300"
                  >
                    {' '}
                    Description{' '}
                  </a>
                </li>
                <li>
                  <a
                    href="#in-page-link-02"
                    className="relative block hover:after:content-[''] hover:after:block hover:after:bg-black hover:after:w-[105%] hover:after:h-[2px] hover:after:absolute hover:after:bottom-[-13px] hover:after:left-0 hover:after:right-0 hover:after:transition-all hover:after:duration-300"
                  >
                    {' '}
                    About Property{' '}
                  </a>
                </li>
                <li>
                  <a
                    href="#in-page-link-03"
                    className="relative block hover:after:content-[''] hover:after:block hover:after:bg-black hover:after:w-[105%] hover:after:h-[2px] hover:after:absolute hover:after:bottom-[-13px] hover:after:left-0 hover:after:right-0 hover:after:transition-all hover:after:duration-300"
                  >
                    {' '}
                    Rooms &amp; Beds{' '}
                  </a>
                </li>
                <li>
                  <a
                    href="#in-page-link-04"
                    className="relative block hover:after:content-[''] hover:after:block hover:after:bg-black hover:after:w-[105%] hover:after:h-[2px] hover:after:absolute hover:after:bottom-[-13px] hover:after:left-0 hover:after:right-0 hover:after:transition-all hover:after:duration-300"
                  >
                    {' '}
                    Details{' '}
                  </a>
                </li>
                <li>
                  <a
                    href="#in-page-link-05"
                    className="relative block hover:after:content-[''] hover:after:block hover:after:bg-black hover:after:w-[105%] hover:after:h-[2px] hover:after:absolute hover:after:bottom-[-13px] hover:after:left-0 hover:after:right-0 hover:after:transition-all hover:after:duration-300"
                  >
                    {' '}
                    Proposal{' '}
                  </a>
                </li>
                <li>
                  <a
                    href="#in-page-link-06"
                    className="relative block hover:after:content-[''] hover:after:block hover:after:bg-black hover:after:w-[105%] hover:after:h-[2px] hover:after:absolute hover:after:bottom-[-13px] hover:after:left-0 hover:after:right-0 hover:after:transition-all hover:after:duration-300"
                  >
                    {' '}
                    Terms &amp; Condition{' '}
                  </a>
                </li>
                <li>
                  <a
                    href="#in-page-link-07"
                    className="relative block hover:after:content-[''] hover:after:block hover:after:bg-black hover:after:w-[105%] hover:after:h-[2px] hover:after:absolute hover:after:bottom-[-13px] hover:after:left-0 hover:after:right-0 hover:after:transition-all hover:after:duration-300"
                  >
                    {' '}
                    Reviews{' '}
                  </a>
                </li>
                <li>
                  <a
                    href="#in-page-link-08"
                    className="relative block hover:after:content-[''] hover:after:block hover:after:bg-black hover:after:w-[105%] hover:after:h-[2px] hover:after:absolute hover:after:bottom-[-13px] hover:after:left-0 hover:after:right-0 hover:after:transition-all hover:after:duration-300"
                  >
                    {' '}
                    Address{' '}
                  </a>
                </li>
                <li>
                  <a
                    href="#in-page-link-09"
                    className="relative block hover:after:content-[''] hover:after:block hover:after:bg-black hover:after:w-[105%] hover:after:h-[2px] hover:after:absolute hover:after:bottom-[-13px] hover:after:left-0 hover:after:right-0 hover:after:transition-all hover:after:duration-300"
                  >
                    {' '}
                    Location{' '}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="flex flex-wrap py-5">
            <div className="w-1/2">
              <div className="border-b-2 border-b-slate-300 pb-5">
                <div className="person-img-box flex gap-x-4 items-center">
                  <Image
                    src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/hosted-person.png"
                    alt=""
                    width={50}
                    height={51}
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
              </div>
              <div className="border-b-2 border-b-slate-300 py-5">
                <ul className="flex flex-wrap gap-y-5">
                  <li className="flex gap-x-1 w-1/2">
                    <Image
                      src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/circle-icon-01.png"
                      alt=""
                      width={30}
                      height={31}
                    ></Image>{' '}
                    Up to guests allowed
                  </li>
                  <li className="flex gap-x-1 w-1/2">
                    <Image
                      src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/circle-icon-02.png"
                      alt=""
                      width={30}
                      height={30}
                    ></Image>
                    Pets welcome (not in pool)
                  </li>
                  <li className="flex gap-x-1 w-1/2">
                    <Image
                      src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/circle-icon-03.png"
                      alt=""
                      width={30}
                      height={30}
                    ></Image>
                    Cancel anytime!
                  </li>
                  <li className="flex gap-x-1 w-1/2">
                    {' '}
                    <Image
                      src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/circle-icon-04.png"
                      alt=""
                      width={30}
                      height={30}
                    ></Image>
                    All ages welcome
                  </li>
                  <li className="flex gap-x-1 w-1/2">
                    <Image
                      src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/circle-icon-05.png"
                      alt=""
                      width={30}
                      height={30}
                    ></Image>
                    Available for up 6 cars
                    <a href="javascript:void(0)">details</a>
                  </li>
                </ul>
              </div>
              <div className="border-b-2 border-b-slate-300 py-5">
                <h4 className="text-text text-2xl mb-3 font-medium">
                  Cave in Noyers-sur-Cher, France
                </h4>
                <p className="text-sm font-normal ">
                  Welcome to the Grotte du Moulin! This natural loft is recessed
                  in a limestone mound and will surprise you with its
                  transparency. It consists of a large kitchen open to the
                  living room and a bedroom with bathroom separated by a sliding
                  garage door. In the bedroom, you have a double bed (160 cm)
                  and in the living room a single bed (90 cm) with a non
                  convertible sofa that can be used as a small single bed.
                </p>
                <h4 className="text-text text-2xl my-3 font-medium">
                  Other things to note
                </h4>
                <p className="text-sm font-normal ">
                  The Cave du Moulin is a natural habitat that requires forced
                  ventilation in order to regulate the humidity rate. Despite
                  everything, at certain times of the year, the rate is
                  inevitably on the rise. If you want all the comforts of a
                  regular house, this completely atypical place may not be
                  suitable for your expectations.
                </p>
              </div>
              <div className="border-b-2 border-b-slate-300 py-5">
                <h4 className="text-text text-2xl mb-3 font-medium">
                  Rooms &amp; Beds
                </h4>
                <h5 className="text-sm text-text font-medium mb-1">
                  5 Bedrooms (sleeps 8)
                </h5>
              </div>
              <div className="border-b-2 border-b-slate-300 py-5">
                <h4 className="text-text text-2xl mb-3 font-medium">Space</h4>
                <ul className="flex flex-wrap gap-y-5">
                  <li className="flex gap-x-1 w-1/2">
                    <Image
                      src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/circle-icon-01.png"
                      alt=""
                      width={30}
                      height={31}
                    ></Image>
                    Night lighting
                  </li>
                  <li className="flex gap-x-1 w-1/2">
                    <Image
                      src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/circle-icon-02.png"
                      alt=""
                      width={30}
                      height={30}
                    ></Image>
                    Patio
                  </li>
                  <li className="flex gap-x-1 w-1/2">
                    <Image
                      src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/circle-icon-03.png"
                      alt=""
                      width={30}
                      height={30}
                    ></Image>
                    Shaded area
                  </li>
                  <li className="flex gap-x-1 w-1/2">
                    {' '}
                    <Image
                      src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/circle-icon-04.png"
                      alt=""
                      width={30}
                      height={30}
                    ></Image>
                    Hot tub
                  </li>
                </ul>
              </div>
              <div className="border-b-2 border-b-slate-300 py-5">
                <h4 className="text-text text-2xl mb-3 font-medium">
                  Features{' '}
                </h4>
                <div className="flex flex-wrap gap-x-3">
                  <div className=" px-5  border-b-slate-300 rounded-xl border-2 w-2/6 py-5">
                    <Image
                      src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/features-img.png"
                      alt="Fire Pits"
                      width={24}
                      height={25}
                    ></Image>
                    <p className="text-sm text-gray-800 pt-3">Fire Pits</p>
                  </div>
                  <div className=" px-5  border-b-slate-300 rounded-xl border-2 w-2/6 py-5">
                    <Image
                      src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/features-img.png"
                      alt="Fire Pits"
                      width={24}
                      height={25}
                    ></Image>
                    <p className="text-sm text-gray-800 pt-3">Fire Pits</p>
                  </div>
                </div>
                <button className="text-text text-base rounded-full py-2 px-10 inline-flex items-center  gap-x-1 duration-300 text-center font-medium bg-sec_main hover:text-main hover:bg-white hover:border-main mt-5 border-gray-400 border-[1px]">
                  Show all 24 Amenities
                </button>
              </div>
              <div className="border-b-2 border-b-slate-300 py-5">
                <h4 className="text-text text-2xl mb-3 font-medium">
                  Terms & Conditions
                </h4>
                <ul className="flex flex-wrap gap-y-5">
                  <li className="flex gap-x-2 w-1/2 items-center">
                    <Image
                      src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/circle-icon-01.png"
                      alt=""
                      width={30}
                      height={31}
                    ></Image>
                    Night lighting
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-1/2">
              <Property_form />
            </div>
          </div>
          <div className="border-b-2 border-b-slate-300 py-5">
            <h4 className="text-text text-2xl mb-3 font-medium">
              Terms & Conditions
            </h4>
            <div className="flex flex-wrap">
              <div className="w-1/6 px-4 border-r-[1px]">
                <div className="small-box">
                  <h6 className="text-sm text-text font-medium mb-1">
                    Overall Rating
                  </h6>
                </div>
                <div className=" flex items-center gap-x-3">
                  <p>1</p>
                  <div className=" h-[6px]  flex rounded-full bg-slate-300 w-full">
                    <div className=" w-4 bg-text rounded-full"></div>
                  </div>
                </div>
                <div className=" flex items-center gap-x-3">
                  <p>2</p>
                  <div className=" h-[6px]  flex rounded-full bg-slate-300 w-full">
                    <div className=" w-4 bg-text rounded-full"></div>
                  </div>
                </div>
                <div className=" flex items-center gap-x-3">
                  <p>3</p>
                  <div className=" h-[6px]  flex rounded-full bg-slate-300 w-full">
                    <div className=" w-4 bg-text rounded-full"></div>
                  </div>
                </div>
                <div className=" flex items-center gap-x-3">
                  <p>4</p>
                  <div className=" h-[6px]  flex rounded-full bg-slate-300 w-full">
                    <div className=" w-4 bg-text rounded-full"></div>
                  </div>
                </div>
                <div className=" flex items-center gap-x-3">
                  <p>5</p>
                  <div className=" h-[6px]  flex rounded-full bg-slate-300 w-full">
                    <div className=" w-4 bg-text rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="w-1/6 px-4 border-r-[1px]">
                <div className="small-box">
                  <h6 className="text-sm text-text font-medium mb-1">
                    Overall Rating
                  </h6>
                </div>
                <div className="flex flex-col items-start justify-between h-24">
                  <p className="font-medium text-base">4.2</p>
                  <Image
                    src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/vertical-icon-01.png"
                    alt=""
                    width={40}
                    height={40}
                  ></Image>
                </div>
              </div>
              <div className="w-1/6 px-4 border-r-[1px]">
                <div className="small-box">
                  <h6 className="text-sm text-text font-medium mb-1">
                    Overall Rating
                  </h6>
                </div>
                <div className="flex flex-col items-start justify-between h-24">
                  <p className="font-medium text-base">4.2</p>
                  <Image
                    src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/vertical-icon-01.png"
                    alt=""
                    width={40}
                    height={40}
                  ></Image>
                </div>
              </div>
              <div className="w-1/6 px-4 border-r-[1px]">
                <div className="small-box">
                  <h6 className="text-sm text-text font-medium mb-1">
                    Overall Rating
                  </h6>
                </div>
                <div className="flex flex-col items-start justify-between h-24">
                  <p className="font-medium text-base">4.2</p>
                  <Image
                    src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/vertical-icon-01.png"
                    alt=""
                    width={40}
                    height={40}
                  ></Image>
                </div>
              </div>
              <div className="w-1/6 px-4 border-r-[1px]">
                <div className="small-box">
                  <h6 className="text-sm text-text font-medium mb-1">
                    Overall Rating
                  </h6>
                </div>
                <div className="flex flex-col items-start justify-between h-24">
                  <p className="font-medium text-base">4.2</p>
                  <Image
                    src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/vertical-icon-01.png"
                    alt=""
                    width={40}
                    height={40}
                  ></Image>
                </div>
              </div>
              <div className="w-1/6 px-4 ">
                <div className="small-box">
                  <h6 className="text-sm text-text font-medium mb-1">
                    Overall Rating
                  </h6>
                </div>
                <div className="flex flex-col items-start justify-between h-24">
                  <p className="font-medium text-base">4.2</p>
                  <Image
                    src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/vertical-icon-01.png"
                    alt=""
                    width={40}
                    height={40}
                  ></Image>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap  border-b-2 border-b-slate-300 py-5 pt-14">
              <div className="w-1/2">
                <div className=" flex items-center gap-x-3 mb-3">
                  <Image
                    src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/hosted-person.png"
                    alt="test test"
                    width={40}
                    height={40}
                    className="rounded-pill"
                  ></Image>
                  <div className="text">
                    <h6 className="text-base text-text font-medium">
                      test test
                    </h6>
                    <p className="text-sm text-slate-400">test, ES</p>
                  </div>
                </div>
                <div>
                  <ul className="flex gap-x-3 flex-wrap ">
                    <li className="flex items-center gap-x-1">
                      <Image
                        src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/amazing-icon-01.png"
                        alt=""
                        width={16}
                        height={17}
                      ></Image>
                      4.3
                    </li>
                    <li>· 2 months ago</li>
                  </ul>
                  <p className="pt-3">test</p>
                </div>
              </div>
              <div className="w-1/2">
                <div className=" flex items-center gap-x-3 mb-3">
                  <Image
                    src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/hosted-person.png"
                    alt="test test"
                    width={40}
                    height={40}
                    className="rounded-pill"
                  ></Image>
                  <div className="text">
                    <h6 className="text-base text-text font-medium">
                      test test
                    </h6>
                    <p className="text-sm text-slate-400">test, ES</p>
                  </div>
                </div>
                <div>
                  <ul className="flex gap-x-3 flex-wrap ">
                    <li className="flex items-center gap-x-1">
                      <Image
                        src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/amazing-icon-01.png"
                        alt=""
                        width={16}
                        height={17}
                      ></Image>
                      4.3
                    </li>
                    <li>· 2 months ago</li>
                  </ul>
                  <p className="pt-3">test</p>
                </div>
              </div>
              <div className="w-full">
                <button className="text-text text-base rounded-full py-2 px-10 inline-flex items-center  gap-x-1 duration-300 text-center font-medium bg-white hover:text-main hover:bg-white hover:border-main mt-8 border-gray-400 border-[1px]">
                  Show all 5 Reviews
                </button>
              </div>
            </div>
            <div className="w-full py-5">
              <h4 className="text-text text-2xl mb-3 font-medium">Address</h4>
              <ul className="flex flex-wrap max-w-[700px] gap-y-3">
                <li className="w-1/2">
                  <b>Address:</b> Los Angeles, California
                </li>
                <li className="w-1/2">
                  <b>Area:</b>{' '}
                </li>
                <li className="w-1/2">
                  <b>Country:</b>{' '}
                </li>
                <li className="w-1/2">
                  <b>City:</b>{' '}
                </li>
                <li className="w-1/2">
                  <b>Zip:</b>{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="flex flex-wrap gap-y-3 py-5">
            <Single_property />
            <Single_property />
            <Single_property />
            <Single_property />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
