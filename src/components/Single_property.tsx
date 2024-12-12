import Image from 'next/image';
import Link from 'next/link';
import Property_Img from '@/images/learning-for-guests-img-03.png';
import Bed from '@/images/bed.png';
import Bathroom from '@/images/bathroom.png';
import Wifi from '@/images/wifi.png';

const Single_property = () => {
  return (
    <div className="main-icon-img-box w-3/12 px-3">
      <div className="img-box relative">
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
            href=""
          >
            Amazing Private Pool + Alpaca Experience
          </Link>
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
            0.0
          </p>
        </div>
        <ul className="main-listing-cat flex flex-wrap gap-3 mt-3">
          <li className="flex flex-row items-center gap-x-[10px]" key="1">
            <Image src={Bed} width={24} height={24} alt="Bed" />3 Bedrooms
          </li>

          <li className="flex flex-row items-center gap-x-[10px]" key="2">
            <Image src={Bathroom} width={24} height={24} alt="Bathroom" />2
            Bathrooms
          </li>

          <li className="flex flex-row items-center gap-x-[10px]" key="3">
            <Image src={Wifi} width={24} height={24} alt="Wifi" />
            Wifi
          </li>
        </ul>
        <div className="price-box flex gap-x-2 text-main mt-2 items-center">
          <h4 className=" text-lg font-normal" data-original-price="280">
            $200
          </h4>
          <p className="text-base">/ hourly</p>
        </div>
      </div>
    </div>
  );
};

export default Single_property;
