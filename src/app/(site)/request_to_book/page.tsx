import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Calendar, Info } from 'lucide-react';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import payoptions from '@/images/pay_options.png';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';

function Page() {
  return (
    <div className="max-w-screen-xl mx-auto px-8">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              className="text-gray-400 text-base duration-300 hover:text-black hover:underline"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/components"
              className="text-gray-400 text-base duration-300 hover:text-black hover:underline"
            >
              Property Testing
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-main text-base duration-300 hover:text-black hover:underline">
              Request to Book
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-wrap">
        <div className="w-1/2 ">
          <div className="heading">
            <h1 className="text-2xl text-text font-medium">Request to Book</h1>
          </div>
          <div className="main-border-box">
            <div className="two-contents">
              <h3 className="py-7 text-xl text-text font-medium">
                Your Reservation
              </h3>
            </div>
            <div className="three-reservation-boxes pb-4 border-b-2 border-b-br">
              <div className="box flex items-center justify-between mt-3 py-2 px-5 rounded-lg border-2 border-br">
                <div className="tow-content flex gap-x-3 items-center">
                  <span className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.53814 14.3334C3.20139 14.3334 2.91634 14.2167 2.68301 13.9834C2.44967 13.7501 2.33301 13.465 2.33301 13.1283L2.33301 4.20523C2.33301 3.86847 2.44967 3.58343 2.68301 3.35009C2.91634 3.11676 3.20139 3.00009 3.53814 3.00009L4.46122 3.00009V1.58984H5.48684V3.00009L10.5381 3.00009V1.58984L11.5381 1.58984V3.00009H12.4612C12.7979 3.00009 13.083 3.11676 13.3163 3.35009C13.5496 3.58343 13.6663 3.86847 13.6663 4.20523L13.6663 13.1283C13.6663 13.465 13.5496 13.7501 13.3163 13.9834C13.083 14.2167 12.7979 14.3334 12.4612 14.3334L3.53814 14.3334ZM3.53814 13.3334L12.4612 13.3334C12.5125 13.3334 12.5595 13.312 12.6022 13.2693C12.645 13.2266 12.6663 13.1795 12.6663 13.1283L12.6663 6.87189L3.33299 6.87189L3.33299 13.1283C3.33299 13.1795 3.35436 13.2266 3.39709 13.2693C3.43984 13.312 3.48685 13.3334 3.53814 13.3334ZM3.33299 5.87191L12.6663 5.87191V4.20523C12.6663 4.15394 12.645 4.10692 12.6022 4.06418C12.5595 4.02144 12.5125 4.00008 12.4612 4.00008L3.53814 4.00008C3.48685 4.00008 3.43984 4.02144 3.39709 4.06418C3.35436 4.10692 3.33299 4.15394 3.33299 4.20523L3.33299 5.87191ZM7.99966 9.38469C7.83641 9.38469 7.69731 9.32722 7.58236 9.21226C7.4674 9.0973 7.40992 8.9582 7.40992 8.79496C7.40992 8.63172 7.4674 8.49262 7.58236 8.37766C7.69731 8.2627 7.83641 8.20523 7.99966 8.20523C8.1629 8.20523 8.302 8.2627 8.41696 8.37766C8.53191 8.49262 8.58939 8.63172 8.58939 8.79496C8.58939 8.9582 8.53191 9.0973 8.41696 9.21226C8.302 9.32722 8.1629 9.38469 7.99966 9.38469ZM5.33299 9.38469C5.16975 9.38469 5.03065 9.32722 4.91569 9.21226C4.80074 9.0973 4.74326 8.9582 4.74326 8.79496C4.74326 8.63172 4.80074 8.49262 4.91569 8.37766C5.03065 8.2627 5.16975 8.20523 5.33299 8.20523C5.49624 8.20523 5.63534 8.2627 5.75029 8.37766C5.86525 8.49262 5.92272 8.63172 5.92272 8.79496C5.92272 8.9582 5.86525 9.0973 5.75029 9.21226C5.63534 9.32722 5.49624 9.38469 5.33299 9.38469ZM10.6663 9.38469C10.5031 9.38469 10.364 9.32722 10.249 9.21226C10.1341 9.0973 10.0766 8.9582 10.0766 8.79496C10.0766 8.63172 10.1341 8.49262 10.249 8.37766C10.364 8.2627 10.5031 8.20523 10.6663 8.20523C10.8296 8.20523 10.9687 8.2627 11.0836 8.37766C11.1986 8.49262 11.2561 8.63172 11.2561 8.79496C11.2561 8.9582 11.1986 9.0973 11.0836 9.21226C10.9687 9.32722 10.8296 9.38469 10.6663 9.38469ZM7.99966 12.0001C7.83641 12.0001 7.69731 11.9426 7.58236 11.8276C7.4674 11.7127 7.40992 11.5736 7.40992 11.4103C7.40992 11.2471 7.4674 11.108 7.58236 10.993C7.69731 10.8781 7.83641 10.8206 7.99966 10.8206C8.1629 10.8206 8.302 10.8781 8.41696 10.993C8.53191 11.108 8.58939 11.2471 8.58939 11.4103C8.58939 11.5736 8.53191 11.7127 8.41696 11.8276C8.302 11.9426 8.1629 12.0001 7.99966 12.0001ZM5.33299 12.0001C5.16975 12.0001 5.03065 11.9426 4.91569 11.8276C4.80074 11.7127 4.74326 11.5736 4.74326 11.4103C4.74326 11.2471 4.80074 11.108 4.91569 10.993C5.03065 10.8781 5.16975 10.8206 5.33299 10.8206C5.49624 10.8206 5.63534 10.8781 5.75029 10.993C5.86525 11.108 5.92272 11.2471 5.92272 11.4103C5.92272 11.5736 5.86525 11.7127 5.75029 11.8276C5.63534 11.9426 5.49624 12.0001 5.33299 12.0001ZM10.6663 12.0001C10.5031 12.0001 10.364 11.9426 10.249 11.8276C10.1341 11.7127 10.0766 11.5736 10.0766 11.4103C10.0766 11.2471 10.1341 11.108 10.249 10.993C10.364 10.8781 10.5031 10.8206 10.6663 10.8206C10.8296 10.8206 10.9687 10.8781 11.0836 10.993C11.1986 11.108 11.2561 11.2471 11.2561 11.4103C11.2561 11.5736 11.1986 11.7127 11.0836 11.8276C10.9687 11.9426 10.8296 12.0001 10.6663 12.0001Z"
                        fill="#484848"
                      ></path>
                    </svg>
                  </span>
                  <p>
                    <b>Date:</b> 2024-10-21 - 2024-10-30
                  </p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="flex bg-gray-200 items-center justify-center rounded-3xl gap-x-3 duration-300  px-3 hover:bg-gray-200 hover:text-black text-text text-base font-normal "
                      variant="secondary"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.33299 12.6653H4.17401L10.9984 5.84096L10.1574 4.99995L3.33299 11.8243V12.6653ZM2.33301 13.6653V11.4089L11.1266 2.61921C11.2274 2.52765 11.3387 2.45689 11.4605 2.40695C11.5824 2.357 11.7101 2.33203 11.8438 2.33203C11.9774 2.33203 12.1069 2.35575 12.2322 2.4032C12.3575 2.45063 12.4684 2.52605 12.565 2.62946L13.3791 3.45381C13.4825 3.55039 13.5563 3.66153 13.6003 3.78722C13.6443 3.91289 13.6663 4.03857 13.6663 4.16425C13.6663 4.2983 13.6434 4.42624 13.5976 4.54805C13.5518 4.66987 13.479 4.78119 13.3791 4.882L4.58939 13.6653H2.33301ZM10.5705 5.42783L10.1574 4.99995L10.9984 5.84096L10.5705 5.42783Z"
                          fill="#484848"
                        ></path>
                      </svg>
                      Edit
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <h3 className="text-2xl font-medium pb-2 text-center">
                        Guest
                      </h3>
                      <p className="font-normal text-base text-text ">
                        This place has a maximum of 5 guests, not including
                        infants. If youre bringing more than 2 pets, please let
                        your host know.
                      </p>
                      <p className="font-normal text-base text-text ">
                        The host indicated their place has features that arent
                        suitable for infants. If youre still interested, send
                        the host a reservation request to get more details.
                      </p>
                    </DialogHeader>
                    <div className="custom-number">
                      <div className=" flex justify-between py-4 border-slate-300 border-b-[1px]">
                        <div className="content">
                          <h6 className="font-medium text-lg text-black">
                            Adults
                          </h6>
                          <p className="text-sm text-text">Ages 13 or above</p>
                        </div>
                        <div className="flex items-center">
                          <button className="border-[1px] border-black w-6 h-6  rounded-full flex items-center justify-center text-black cursor-pointer">
                            -
                          </button>
                          <p className="w-10 text-center font-semibold text-text ">
                            0
                          </p>
                          <button className="border-[1px] border-black w-6 h-6  rounded-full flex items-center justify-center text-black cursor-pointer">
                            +
                          </button>
                        </div>
                      </div>
                      <div className=" flex justify-between py-4 border-slate-300 border-b-[1px]">
                        <div className="content">
                          <h6 className="font-medium text-lg text-black">
                            Adults
                          </h6>
                          <p className="text-sm text-text">Ages 13 or above</p>
                        </div>
                        <div className="flex items-center">
                          <button className="border-[1px] border-black w-6 h-6  rounded-full flex items-center justify-center text-black cursor-pointer">
                            -
                          </button>
                          <p className="w-10 text-center font-semibold text-text ">
                            0
                          </p>
                          <button className="border-[1px] border-black w-6 h-6  rounded-full flex items-center justify-center text-black cursor-pointer">
                            +
                          </button>
                        </div>
                      </div>
                      <div className=" flex justify-between py-4 border-slate-300 border-b-[1px]">
                        <div className="content">
                          <h6 className="font-medium text-lg text-black">
                            Adults
                          </h6>
                          <p className="text-sm text-text">Ages 13 or above</p>
                        </div>
                        <div className="flex items-center">
                          <button className="border-[1px] border-black w-6 h-6  rounded-full flex items-center justify-center text-black cursor-pointer">
                            -
                          </button>
                          <p className="w-10 text-center font-semibold text-text ">
                            0
                          </p>
                          <button className="border-[1px] border-black w-6 h-6  rounded-full flex items-center justify-center text-black cursor-pointer">
                            +
                          </button>
                        </div>
                      </div>
                      <div className=" flex justify-between py-4 border-slate-300 border-b-[1px]">
                        <div className="content">
                          <h6 className="font-medium text-lg text-black">
                            Adults
                          </h6>
                          <p className="text-sm text-text">Ages 13 or above</p>
                        </div>
                        <div className="flex items-center">
                          <button className="border-[1px] border-black w-6 h-6  rounded-full flex items-center justify-center text-black cursor-pointer">
                            -
                          </button>
                          <p className="w-10 text-center font-semibold text-text ">
                            0
                          </p>
                          <button className="border-[1px] border-black w-6 h-6  rounded-full flex items-center justify-center text-black cursor-pointer">
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <DialogFooter className="flex sm:justify-between items-center ">
                      <DialogClose asChild>
                        <Button
                          variant="link"
                          className="px-0 hover:no-underline"
                        >
                          Cancel
                        </Button>
                      </DialogClose>

                      <Button
                        type="submit"
                        className="t-btn text-white inline-flex rounded-[50px] duration-300 w-[165px] h-[45px] items-center justify-center px-3 py-2 gap-3 bg-main font-medium hover:bg-main "
                      >
                        Save
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="box flex items-center justify-between mt-3 py-2 px-5 rounded-lg border-2 border-br">
                <div className="tow-content  flex gap-x-3 items-center">
                  <span className="icunn  w-10 h-10 rounded-full flex items-center justify-center bg-gray-200">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.31522 10.0192L10.0178 9.31669L7.4998 6.79857V3.66795H6.49984V7.20385L9.31522 10.0192ZM7.00094 13.3346C6.12498 13.3346 5.30163 13.1684 4.53087 12.8359C3.7601 12.5035 3.08965 12.0523 2.5195 11.4824C1.94935 10.9125 1.49798 10.2424 1.16539 9.47195C0.832798 8.70154 0.666504 7.87836 0.666504 7.0024C0.666504 6.12645 0.832726 5.30309 1.16517 4.53234C1.49762 3.76157 1.94878 3.09111 2.51867 2.52097C3.08857 1.95081 3.75873 1.49944 4.52915 1.16685C5.29957 0.834264 6.12275 0.667969 6.9987 0.667969C7.87466 0.667969 8.69802 0.834192 9.46877 1.16664C10.2395 1.49908 10.91 1.95025 11.4801 2.52014C12.0503 3.09004 12.5017 3.7602 12.8343 4.53062C13.1668 5.30103 13.3331 6.12421 13.3331 7.00017C13.3331 7.87613 13.1669 8.69948 12.8345 9.47024C12.502 10.241 12.0509 10.9115 11.481 11.4816C10.9111 12.0518 10.2409 12.5031 9.47049 12.8357C8.70008 13.1683 7.87689 13.3346 7.00094 13.3346ZM6.99982 12.3346C8.4776 12.3346 9.73593 11.8152 10.7748 10.7763C11.8137 9.7374 12.3332 8.47906 12.3332 7.00129C12.3332 5.52351 11.8137 4.26517 10.7748 3.22629C9.73593 2.1874 8.4776 1.66795 6.99982 1.66795C5.52204 1.66795 4.26371 2.1874 3.22482 3.22629C2.18593 4.26517 1.66649 5.52351 1.66649 7.00129C1.66649 8.47906 2.18593 9.7374 3.22482 10.7763C4.26371 11.8152 5.52204 12.3346 6.99982 12.3346Z"
                        fill="#484848"
                      />
                    </svg>
                  </span>
                  <p>
                    <b>Time:</b> No guests selected
                  </p>
                </div>

                <button
                  type="button"
                  className="share edit-button flex bg-gray-200 items-center justify-center rounded-3xl gap-x-3 duration-300 py-1 px-3"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop15"
                  data-start_date="2024-10-22"
                  data-end_date="2024-10-31"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33299 12.6653H4.17401L10.9984 5.84096L10.1574 4.99995L3.33299 11.8243V12.6653ZM2.33301 13.6653V11.4089L11.1266 2.61921C11.2274 2.52765 11.3387 2.45689 11.4605 2.40695C11.5824 2.357 11.7101 2.33203 11.8438 2.33203C11.9774 2.33203 12.1069 2.35575 12.2322 2.4032C12.3575 2.45063 12.4684 2.52605 12.565 2.62946L13.3791 3.45381C13.4825 3.55039 13.5563 3.66153 13.6003 3.78722C13.6443 3.91289 13.6663 4.03857 13.6663 4.16425C13.6663 4.2983 13.6434 4.42624 13.5976 4.54805C13.5518 4.66987 13.479 4.78119 13.3791 4.882L4.58939 13.6653H2.33301ZM10.5705 5.42783L10.1574 4.99995L10.9984 5.84096L10.5705 5.42783Z"
                      fill="#484848"
                    />
                  </svg>
                  Edit
                </button>
              </div>
              <div className="box flex items-center justify-between mt-3 py-2 px-5 rounded-lg border-2 border-br">
                <div className="tow-content  flex gap-x-3 items-center">
                  <span className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.666992 13.3346L0.666992 11.7122C0.666992 11.336 0.762607 11.0004 0.953838 10.7052C1.14506 10.41 1.40043 10.1803 1.71996 10.0162C2.40309 9.67691 3.09001 9.41536 3.78071 9.2315C4.47143 9.04765 5.23057 8.95572 6.05814 8.95572C6.88571 8.95572 7.64484 9.04765 8.33555 9.2315C9.02626 9.41536 9.71319 9.67691 10.3963 10.0162C10.7158 10.1803 10.9712 10.41 11.1624 10.7052C11.3537 11.0004 11.4493 11.336 11.4493 11.7122V13.3346H0.666992ZM12.8869 13.3346V11.6224C12.8869 11.1433 12.7714 10.6867 12.5403 10.2527C12.3093 9.81861 11.9815 9.44617 11.5571 9.13536C12.0391 9.20835 12.4966 9.32133 12.9298 9.47432C13.3629 9.6273 13.7762 9.80811 14.1697 10.0168C14.5411 10.2179 14.8279 10.455 15.0302 10.7281C15.2325 11.0011 15.3337 11.2992 15.3337 11.6224V13.3346H12.8869ZM6.05814 7.77672C5.36629 7.77672 4.77401 7.5266 4.28132 7.02638C3.78863 6.52614 3.54228 5.9248 3.54228 5.22235C3.54228 4.51989 3.78863 3.91855 4.28132 3.41832C4.77401 2.91809 5.36629 2.66797 6.05814 2.66797C6.74999 2.66797 7.34227 2.91809 7.83496 3.41832C8.32764 3.91855 8.57398 4.51989 8.57398 5.22235C8.57398 5.9248 8.32764 6.52614 7.83496 7.02638C7.34227 7.5266 6.74999 7.77672 6.05814 7.77672ZM12.2648 5.22235C12.2648 5.9248 12.0185 6.52614 11.5258 7.02638C11.0331 7.5266 10.4408 7.77672 9.74897 7.77672C9.66787 7.77672 9.56466 7.76736 9.43933 7.74865C9.31401 7.72995 9.2108 7.70936 9.1297 7.68691C9.41318 7.34089 9.63104 6.95701 9.78327 6.53529C9.93551 6.11358 10.0116 5.67564 10.0116 5.22148C10.0116 4.76733 9.93399 4.33113 9.77871 3.91287C9.62343 3.49463 9.4071 3.10961 9.1297 2.75779C9.23291 2.72036 9.33612 2.69604 9.43933 2.68481C9.54255 2.67358 9.64576 2.66797 9.74897 2.66797C10.4408 2.66797 11.0331 2.91809 11.5258 3.41832C12.0185 3.91855 12.2648 4.51989 12.2648 5.22235ZM1.74521 12.2399H10.3711V11.7122C10.3711 11.5597 10.3335 11.424 10.2584 11.3052C10.1833 11.1863 10.0642 11.0825 9.90107 10.9936C9.30942 10.6839 8.70027 10.4493 8.07361 10.2897C7.44694 10.1302 6.77512 10.0504 6.05814 10.0504C5.34116 10.0504 4.66934 10.1302 4.04267 10.2897C3.41601 10.4493 2.80686 10.6839 2.21521 10.9936C2.0521 11.0825 1.93298 11.1863 1.85786 11.3052C1.78276 11.424 1.74521 11.5597 1.74521 11.7122V12.2399ZM6.05814 6.68201C6.45349 6.68201 6.79194 6.53908 7.07348 6.25323C7.35501 5.96738 7.49578 5.62376 7.49578 5.22235C7.49578 4.82095 7.35501 4.47732 7.07348 4.19147C6.79194 3.90562 6.45349 3.76269 6.05814 3.76269C5.66279 3.76269 5.32434 3.90562 5.0428 4.19147C4.76126 4.47732 4.6205 4.82095 4.6205 5.22235C4.6205 5.62376 4.76126 5.96738 5.0428 6.25323C5.32434 6.53908 5.66279 6.68201 6.05814 6.68201Z"
                        fill="#484848"
                      ></path>
                    </svg>
                  </span>
                  <p>
                    <b>Guests:</b> No guests selected
                  </p>
                </div>

                <button
                  type="button"
                  className="share flex bg-gray-200 items-center justify-center rounded-3xl gap-x-3 duration-300 py-1 px-3"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop14"
                  data-adults="0"
                  data-childrens="0"
                  data-infants="0"
                  data-pets="0"
                >
                  {' '}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33299 12.6653H4.17401L10.9984 5.84096L10.1574 4.99995L3.33299 11.8243V12.6653ZM2.33301 13.6653V11.4089L11.1266 2.61921C11.2274 2.52765 11.3387 2.45689 11.4605 2.40695C11.5824 2.357 11.7101 2.33203 11.8438 2.33203C11.9774 2.33203 12.1069 2.35575 12.2322 2.4032C12.3575 2.45063 12.4684 2.52605 12.565 2.62946L13.3791 3.45381C13.4825 3.55039 13.5563 3.66153 13.6003 3.78722C13.6443 3.91289 13.6663 4.03857 13.6663 4.16425C13.6663 4.2983 13.6434 4.42624 13.5976 4.54805C13.5518 4.66987 13.479 4.78119 13.3791 4.882L4.58939 13.6653H2.33301ZM10.5705 5.42783L10.1574 4.99995L10.9984 5.84096L10.5705 5.42783Z"
                      fill="#484848"
                    />
                  </svg>
                  Edit
                </button>
              </div>
            </div>
            <div className="payment-box border-b-2 border-b-br pb-4">
              <div className="two-contents flex justify-between flex-wrap items-center">
                <h3 className="py-7 text-xl text-text font-medium">
                  Your Reservation
                </h3>
                <Image src={payoptions} width={204} height={36} alt=""></Image>
              </div>
              <div className="payment_form flex flex-wrap">
                <div className="form-field w-full pb-4">
                  <Label className="font-sm font-normal">Select a Card</Label>
                  <Select>
                    <SelectTrigger className="w-full border-2 border-br rounded-2xl px-4 h-12">
                      <SelectValue placeholder="Choose Payment Method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Credit_or_Debit_Card">
                          Credit or Debit Card
                        </SelectItem>
                        <SelectItem value="PayPal">PayPal</SelectItem>
                        <SelectItem value="Google Pay">Google Pay</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="form-field w-full pb-4">
                  <Label htmlFor="card_num" className="font-sm font-normal">
                    Card Number
                  </Label>
                  <Input
                    type="number"
                    placeholder="Card Number"
                    name="card_num"
                    className="w-full border-2 border-br rounded-2xl px-4 h-12"
                  />
                </div>
                <div className="form-field w-1/2 pr-3 pb-4">
                  <Label htmlFor="card_num" className="font-sm font-normal">
                    Expiration
                  </Label>
                  <Input
                    type="number"
                    placeholder="MM/YY"
                    name="card_num"
                    className="w-full border-2 border-br rounded-2xl px-4 h-12"
                  />
                </div>
                <div className="form-field w-1/2 pl-3 pb-4">
                  <Label htmlFor="card_num" className="font-sm font-normal">
                    Cvv
                  </Label>
                  <Input
                    type="number"
                    placeholder="CVV"
                    name="card_num"
                    className="w-full border-2 border-br rounded-2xl px-4 h-12"
                  />
                </div>
                <div className="form-field w-full pb-4">
                  <Label htmlFor="card_num" className="font-sm font-normal">
                    Zip Code
                  </Label>
                  <Input
                    type="number"
                    placeholder="Zip Code"
                    name="card_num"
                    className="w-full border-2 border-br rounded-2xl px-4 h-12"
                  />
                </div>
                <div className="form-field w-full pb-4">
                  <Label className="font-sm font-normal">
                    Select a Country
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full border-2 border-br rounded-2xl px-4 h-12">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="USA">USA</SelectItem>
                        <SelectItem value="UK">UK</SelectItem>
                        <SelectItem value="Australia">Australia</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="msg flex px-5 py-7 bg-gray_bg items-center gap-x-8 rounded-xl pb-4">
                <div className="icon h-16 w-16 rounded-full bg-green-100 flex items-center justify-center ">
                  <Calendar stroke="#4caf50" size={38} />
                </div>

                <p className="w-[85%]">
                  Your reservation won’t be confirmed until the Host accepts
                  your request (within 24 hours). You won’t be charged until
                  then.
                </p>
              </div>
            </div>
            <div className="msg_host">
              <div className="heading">
                <h3 className="text-2xl text-text font-medium">
                  Message the Host
                </h3>
              </div>
              <p className="text-sm font-normal ">
                Share why you&apos;re traveling, who&apos;s coming with you, and
                what you love about the space.
              </p>
              <div className="person-Image-box flex gap-x-4 items-center">
                <Image
                  alt=""
                  loading="lazy"
                  width="50"
                  height="51"
                  decoding="async"
                  data-nImage="1"
                  style={{ color: 'transparent' }}
                  src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/hosted-person.png"
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
              <div className="text-box h-30 border-black rounded-lg border-[1px] px-3 py-5">
                <p>
                  Hi! We are Jeremy from Belgium and Erle from Norway! We met in
                  Thailand and later in Australia by chance, where we decided to
                  travel and live in a self-converted campervan together. Now we
                  live close to Oslo
                </p>
              </div>
            </div>
            <div className="cancellation_policy">
              <div className="heading">
                <h3 className="text-2xl text-text font-medium">
                  Cancellation Policy
                </h3>
              </div>
              <p className="text-sm font-normal ">
                <b>Free cancellation before Jan 30</b>. Cancel before check-in
                on Feb 4 for a partial refund.{' '}
                <Link href="#" className="text-main">
                  Learn more
                </Link>
              </p>
            </div>
            <div className="border-b-2 border-b-slate-300 py-5">
              <h4 className="text-text text-2xl mb-3 font-medium">
                Ground Rules
              </h4>
              <ul className="flex flex-wrap gap-y-5">
                <li className="flex gap-x-1 w-1/2">
                  <Image
                    alt=""
                    loading="lazy"
                    width="30"
                    height="31"
                    src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/circle-icon-02.png"
                  ></Image>
                  Night lighting
                </li>
                <li className="flex gap-x-1 w-1/2">
                  <Image
                    alt=""
                    loading="lazy"
                    width="30"
                    height="30"
                    src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/circle-icon-02.png"
                  ></Image>
                  Patio
                </li>
                <li className="flex gap-x-1 w-1/2">
                  <Image
                    alt=""
                    loading="lazy"
                    width="30"
                    height="30"
                    src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/circle-icon-02.png"
                  ></Image>
                  Shaded area
                </li>
                <li className="flex gap-x-1 w-1/2">
                  {' '}
                  <Image
                    alt=""
                    loading="lazy"
                    width="30"
                    height="30"
                    src="https://luckybackyards.com/staging/wp-content/themes/luckybackyard/assets/images/circle-icon-02.png"
                  ></Image>
                  Hot tub
                </li>
              </ul>
            </div>
            <div className="msg flex px-5 py-7 gap-x-1 rounded-xl pb-4">
              <div className="icon h-16  rounded-full  flex  justify-center ">
                <Info size={38} width={18} height={18} />
              </div>

              <p className="w-[85%] leading-[1]">
                By selecting the button below, I agree to the Host&apos;s House
                Rules, Ground rules for guests, Lucky Backyards Rebooking and
                Refund Policy, and that Airbnb can charge my payment method if
                I’m responsible for damage. I agree to pay the total amount
                shown if the Host accepts my booking request.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
}

export default Page;
