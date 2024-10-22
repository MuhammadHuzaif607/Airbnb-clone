import Singleproperty from '@/components/Single_property';
import Suggestions from '@/components/Suggestions';
import Blogs from '@/components/Blogs';
import bin from '@/app/public/images/bin.png';
import './globals.css';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X, Plus } from 'lucide-react';
import Image from 'next/image';
import Search from '@/components/Search';


const Page = () => {
  return (
    <>
      <Search />
      <div className="flex flex-wrap gap-y-3 py-20">
        <Singleproperty />
        <Singleproperty />
        <Singleproperty />
        <Singleproperty />
        <Singleproperty />
        <Singleproperty />
        <Singleproperty />
        <Singleproperty />
        <Singleproperty />
        <Singleproperty />
      </div>
      <Suggestions />
      <Blogs />
      <div className="modal fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white py-4 px-5 w-1/3 rounded-3xl hidden">
        <h4 className="text-text text-2xl font-medium pb-7 text-center">
          Create a new Wishlist
        </h4>
        <Label>Name</Label>
        <Input placeholder="Add your favourite place"></Input>
        <div className="flex flex-wrap justify-between items-center">
          <button className=" text-black flex font-medium  gap-x-1 rounded-full duration-300 text-lg  w-40">
            Cancel
          </button>
          <button
            type="submit"
            className="bg-main h-14 text-white  rounded-full text-lg font-medium duration-300 mt-6 w-40"
            name="booking_submit"
          >
            Save
          </button>
        </div>
        <div className="p-1 bg-slate-400 rounded-2xl absolute top-2 right-2">
          <X className="w-5 h-5" />
        </div>
      </div>
      <div className="modal fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white py-4 px-5 w-1/3 rounded-3xl hidden">
        <h4 className="text-text text-2xl font-medium pb-7 text-center">
          Add To Wishlist
        </h4>
        <div className="flex flex-wrap items-center gap-x-3 pb-3">
          <div className="w-28 h-20 bg-main rounded-2xl flex items-center justify-center">
            <Plus stroke="#4caf50" className=" rounded-full" />
          </div>
          <div>
            <h5 className="text-text text-lg font-medium  ">
              Create a new Wishlist
            </h5>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 pb-3">
          <div>
            <Image
              src="https://luckybackyards.com/wp-content/uploads/listings_gallery/Fire-Pit-Experience-103.jpg"
              width={80}
              height={40}
              alt=""
              className="w-28 h-20 object-cover rounded-2xl"
            ></Image>
          </div>
          <div>
            <h5 className="text-text text-lg font-medium  ">
              Swimming pools in Los Angeles <br /> (2) Saved
            </h5>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <button className=" text-black flex font-medium  gap-x-1 rounded-full duration-300 text-lg  w-40">
            Cancel
          </button>
          <button
            type="submit"
            className="bg-main h-14 text-white  rounded-full text-lg font-medium duration-300 mt-6 w-40"
            name="booking_submit"
          >
            Save
          </button>
        </div>
        <div className="p-1 bg-slate-400 rounded-2xl absolute top-2 right-2">
          <X className="w-5 h-5" />
        </div>
      </div>
      <div className="modal fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white py-4 px-7 w-2/5 rounded-3xl hidden">
        <h4 className="text-text text-2xl font-medium pb-7 text-center">
          Delete This Wishlist
        </h4>
        <div className="text-center">
          <Image
            src={bin}
            width={150}
            height={130}
            alt=""
            className="mx-auto pt-8 pb-5"
          ></Image>
          <p className="font-normal tet-sm text-gray-400 pb-3">
            “Swimming pools in Los Angeles” will also be permanently deleted for
            everyone you’ve shared it with.
          </p>
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <button className=" text-black flex font-medium  gap-x-1 rounded-full duration-300 text-lg  w-40">
            Cancel
          </button>
          <button
            type="submit"
            className="bg-main h-14 text-white  rounded-full text-lg font-medium duration-300 mt-6 w-40"
            name="booking_submit"
          >
            Save
          </button>
        </div>
        <div className="p-1 bg-slate-400 rounded-2xl absolute top-2 right-2">
          <X className="w-5 h-5" />
        </div>
      </div>
    </>
  );
};

export default Page;
