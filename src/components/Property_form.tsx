'use client';

function Property_form() {
  return (
    <div className="main-form-box w-4/5 mx-auto py-4 px-5 ">
      <div className="price-box flex items-center ga-x-4 border-b-[1px] border-slate-300 pb-4 mb-5">
        <h4 className="text-main text-xl m-0 font-normal">$250/ Night</h4>
      </div>
      <form id="booking-form" action="" method="get">
        {/* <div className="my-3 d-flex border rounded-4 p-3 gap-2 easepick-dp">
          <i className="calendar icon opacity-50"></i>
          <input
            className="w-100 border-0"
            id="booking-datepicker"
            placeholder="Check In/Check Out"
          ></input>
          <span className="easepick-wrapper"></span>
        </div>
        <div className="ui container p-0">
          <div className="ui form">
            <div className="field">
              <label htmlFor="start-time">Start Time:</label>
              <div
                className="ui selection dropdown border rounded-4 p-3"
                id="start-time-dropdown"
              >
                <input type="hidden" id="start-time"></input>
                <i className="dropdown icon"></i>
                <div className="default text">Select Start Time</div>
                <div className="menu" id="start-time-menu"></div>
              </div>
            </div>
            <div className="field">
              <label htmlFor="end-time">End Time:</label>
              <div
                className="ui selection dropdown border rounded-4 p-3"
                id="end-time-dropdown"
              >
                <input type="hidden" id="end-time"></input>
                <i className="dropdown icon"></i>
                <div className="default text">Select End Time</div>
                <div className="menu" id="end-time-menu">
                  Options will be populated by JavaScript
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="input-box">
          <div className="ui calendar rangestart" id="start_date">
            <p>Check In</p>
            <div className="ui input left icon">
              <i className="calendar icon"></i>
              <input
                type="text"
                name="start_date"
                placeholder="Oct 13, 2024"
              ></input>
            </div>
          </div>
        </div>
        */}
        <div className="input-box">
          <div className="ui calendar rangeend" id="end_date">
            <p>Check Out</p>
            <div className="ui input left icon">
              <i className="calendar icon"></i>
              <input
                type="text"
                name="end_date"
                placeholder="Oct 13, 2024"
              ></input>
            </div>
          </div>
        </div>
        <p id="days"></p>

        <div className="input-box mt-3">
          <div className="ui calendar">
            <p>Guests</p>

            <div className="where-dest add-number-fields">
              <div className="down-content">
                <p id="summary">Adults 2, Childrens 1, Infant 2, Pets 1</p>

                <div className="custom-number">
                  <div className=" flex justify-between py-4 border-slate-300 border-b-[1px]">
                    <div className="content">
                      <h6 className="font-medium text-lg text-black">Adults</h6>
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
                      <h6 className="font-medium text-lg text-black">Adults</h6>
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
                      <h6 className="font-medium text-lg text-black">Adults</h6>
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
                      <h6 className="font-medium text-lg text-black">Adults</h6>
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
              </div>
            </div>
          </div>
        </div>
        <div className="all-three-btns">
          <button
            type="submit"
            className="bg-main h-14 text-white w-full rounded-full text-lg font-medium duration-300 mt-6"
            name="booking_submit"
          >
            Book Now
          </button>
          <a
            href="tel:1234567890"
            className="border-main border-[1px] text-black flex font-medium items-center justify-center gap-x-1 rounded-full mt-4 duration-300 text-lg h-14"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.25961 9.02878V3.30289C9.25961 3.11083 9.32476 2.94983 9.45506 2.81991C9.58536 2.68997 9.74681 2.625 9.93941 2.625H14.6981C14.8907 2.625 15.0516 2.68997 15.181 2.81991C15.3103 2.94983 15.375 3.11083 15.375 3.30289V6.50477C15.375 6.69683 15.31 6.85783 15.1801 6.98777C15.0501 7.11769 14.8891 7.18266 14.6971 7.18266H11.1057L9.25961 9.02878ZM10.3846 6.05768H14.25V3.74998H10.3846V6.05768ZM14.5802 15.375C13.1668 15.375 11.7468 15.0464 10.3204 14.3891C8.89397 13.7319 7.58341 12.8048 6.38871 11.6077C5.19399 10.4105 4.26803 9.09998 3.61082 7.67595C2.95361 6.25191 2.625 4.83317 2.625 3.41972C2.625 3.19266 2.7 3.00344 2.85 2.85206C3 2.70069 3.1875 2.625 3.4125 2.625H5.85862C6.04805 2.625 6.21512 2.68678 6.35983 2.81034C6.50454 2.93391 6.59661 3.08655 6.63602 3.26828L7.06583 5.47498C7.09564 5.67979 7.08939 5.85576 7.04708 6.00287C7.00478 6.14998 6.92881 6.27354 6.81919 6.37354L5.08699 8.0596C5.36584 8.57017 5.68435 9.0531 6.04253 9.50839C6.4007 9.96369 6.78844 10.3986 7.20574 10.813C7.61729 11.2245 8.05479 11.6067 8.51826 11.9596C8.98172 12.3125 9.4822 12.6409 10.0197 12.9447L11.7029 11.2471C11.8202 11.125 11.9623 11.0394 12.1291 10.9904C12.2959 10.9414 12.4692 10.9293 12.649 10.9543L14.7317 11.3784C14.9211 11.4284 15.0757 11.525 15.1954 11.6683C15.3151 11.8115 15.375 11.974 15.375 12.1558V14.5875C15.375 14.8125 15.2993 15 15.1479 15.15C14.9965 15.3 14.8073 15.375 14.5802 15.375ZM4.55479 6.99519L5.89326 5.71442C5.91729 5.69518 5.93292 5.66874 5.94013 5.63509C5.94734 5.60143 5.94614 5.57018 5.93653 5.54134L5.61056 3.86537C5.60095 3.82691 5.58413 3.79806 5.56009 3.77884C5.53605 3.7596 5.5048 3.74998 5.46634 3.74998H3.86248C3.83364 3.74998 3.80961 3.7596 3.79037 3.77884C3.77113 3.79806 3.76151 3.8221 3.76151 3.85095C3.79998 4.36345 3.88387 4.88413 4.01319 5.41298C4.14253 5.94183 4.32306 6.46923 4.55479 6.99519ZM11.0798 13.4769C11.5769 13.7086 12.0954 13.8858 12.6353 14.0084C13.1752 14.131 13.6798 14.2038 14.149 14.2269C14.1779 14.2269 14.2019 14.2173 14.2211 14.1981C14.2404 14.1788 14.25 14.1548 14.25 14.1259V12.5481C14.25 12.5096 14.2404 12.4783 14.2211 12.4543C14.2019 12.4303 14.1731 12.4134 14.1346 12.4038L12.5596 12.0836C12.5308 12.074 12.5055 12.0728 12.4839 12.08C12.4622 12.0872 12.4394 12.1029 12.4154 12.1269L11.0798 13.4769Z"
                fill="#484848"
              ></path>
            </svg>
            Contact Owner
          </a>
          <a
            href="#"
            className="border-main border-[1px] text-black flex font-medium items-center justify-center gap-x-1 rounded-full mt-4 duration-300 text-lg h-14"
          >
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99998 13.2459L7.17211 12.5017C5.92885 11.3738 4.90072 10.4046 4.08774 9.59402C3.27476 8.78344 2.63054 8.06205 2.15506 7.42984C1.67957 6.79763 1.34736 6.22094 1.15842 5.69979C0.969475 5.17864 0.875 4.6498 0.875 4.11326C0.875 3.04885 1.23389 2.15775 1.95168 1.43996C2.66947 0.722176 3.56057 0.363281 4.62498 0.363281C5.27979 0.363281 5.89854 0.516413 6.48123 0.822676C7.06392 1.12893 7.57017 1.56811 7.99998 2.14022C8.42979 1.56811 8.93604 1.12893 9.51873 0.822676C10.1014 0.516413 10.7202 0.363281 11.375 0.363281C12.4394 0.363281 13.3305 0.722176 14.0483 1.43996C14.7661 2.15775 15.125 3.04885 15.125 4.11326C15.125 4.6498 15.0305 5.17864 14.8415 5.69979C14.6526 6.22094 14.3204 6.79763 13.8449 7.42984C13.3694 8.06205 12.7264 8.78344 11.9158 9.59402C11.1053 10.4046 10.0759 11.3738 8.82785 12.5017L7.99998 13.2459ZM7.99998 11.7258C9.19998 10.646 10.1875 9.72047 10.9625 8.94932C11.7375 8.17817 12.35 7.50822 12.8 6.93947C13.25 6.37072 13.5625 5.86567 13.7375 5.42432C13.9125 4.98297 14 4.54595 14 4.11326C14 3.36326 13.75 2.73826 13.25 2.23826C12.75 1.73826 12.125 1.48826 11.375 1.48826C10.7827 1.48826 10.2353 1.65629 9.73291 1.99236C9.23051 2.32841 8.83268 2.79596 8.5394 3.39501H7.46056C7.16249 2.79116 6.76345 2.3224 6.26345 1.98874C5.76345 1.65509 5.21729 1.48826 4.62498 1.48826C3.87979 1.48826 3.25599 1.73826 2.75358 2.23826C2.25118 2.73826 1.99998 3.36326 1.99998 4.11326C1.99998 4.54595 2.08748 4.98297 2.26248 5.42432C2.43748 5.86567 2.74998 6.37072 3.19998 6.93947C3.64998 7.50822 4.26248 8.17697 5.03748 8.94572C5.81248 9.71447 6.79998 10.6412 7.99998 11.7258Z"
                fill="#484848"
              ></path>
            </svg>
            Add to Favorites
          </a>
        </div>

        <div className="flex items-center justify-between pt-4">
          <h6>Share with friends</h6>
          <div className="social-linkspt-4">
            <ul className="flex  gap-x-2 p">
              <li>
                <a
                  href="#"
                  className="bg-slate-300 w-10 h-10 flex rounded-full items-center justify-center duration-300"
                >
                  <svg
                    width="17"
                    height="20"
                    viewBox="0 0 17 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.52397 18.5505C2.25713 17.8191 1.43613 16.7533 1.06095 15.3532C0.685765 13.953 0.863876 12.6195 1.59528 11.3527L6.99915 1.9929C7.52535 1.0815 8.30033 0.488644 9.32409 0.214341C10.3478 -0.0599707 11.3154 0.0659736 12.2268 0.592174C13.1382 1.11837 13.7311 1.89335 14.0054 2.91709C14.2797 3.94084 14.1538 4.90841 13.6276 5.81982L8.75254 14.2636C8.4187 14.8418 7.93687 15.2153 7.30706 15.384C6.67724 15.5527 6.07318 15.4702 5.49488 15.1363C4.91658 14.8024 4.5431 14.3206 4.37446 13.6909C4.20584 13.0612 4.28845 12.4572 4.62229 11.879L9.49731 3.43522L10.5298 4.03135L5.65483 12.4751C5.48593 12.7677 5.4433 13.0701 5.52695 13.3822C5.61059 13.6944 5.7987 13.935 6.09125 14.1039C6.38381 14.2728 6.68618 14.3154 6.99837 14.2318C7.31055 14.1481 7.55109 13.96 7.72 13.6674L12.595 5.22368C12.9639 4.58481 13.055 3.91744 12.8684 3.22158C12.6818 2.52569 12.269 1.99327 11.63 1.6243C10.9909 1.25534 10.3236 1.16418 9.62816 1.35081C8.93271 1.53744 8.40056 1.95019 8.03171 2.58905L2.62785 11.9488C2.06503 12.9236 1.92932 13.9548 2.22073 15.0424C2.51214 16.13 3.14526 16.9552 4.12011 17.518C5.09495 18.0808 6.12615 18.2165 7.21371 17.9251C8.30128 17.6337 9.12647 17.0006 9.68929 16.0257L15.0932 6.66598L16.1257 7.26213L10.7218 16.6219C9.99044 17.8887 8.92465 18.7097 7.52449 19.0849C6.12431 19.4601 4.7908 19.2819 3.52397 18.5505Z"
                      fill="#484848"
                    ></path>
                  </svg>
                </a>
              </li>

              <li>
                <a  href="#" className="bg-slate-300 w-10 h-10 flex rounded-full items-center justify-center duration-300">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.23896 16V8.70218H11.6875L12.0549 5.85725H9.23896V4.04118C9.23896 3.21776 9.46667 2.65661 10.6488 2.65661L12.154 2.65599V0.111384C11.8937 0.0775563 11.0002 0 9.96017 0C7.78849 0 6.30172 1.32557 6.30172 3.75942V5.85725H3.8457V8.70218H6.30172V16H9.23896Z"
                      fill="#484848"
                    ></path>
                  </svg>
                </a>
              </li>

              <li>
                <a href="#"  className="bg-slate-300 w-10 h-10 flex rounded-full items-center justify-center duration-300">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_273_11760)">
                      <path
                        d="M11.9997 0H3.9999C1.80015 0 0 1.80015 0 3.9999V12.0001C0 14.1993 1.80015 16 3.9999 16H11.9997C14.1995 16 15.9996 14.1993 15.9996 12.0001V3.9999C15.9996 1.80015 14.1995 0 11.9997 0ZM14.6662 12.0001C14.6662 13.4701 13.4705 14.6666 11.9997 14.6666H3.9999C2.52974 14.6666 1.33337 13.4701 1.33337 12.0001V3.9999C1.33337 2.52955 2.52974 1.33337 3.9999 1.33337H11.9997C13.4705 1.33337 14.6662 2.52955 14.6662 3.9999V12.0001Z"
                        fill="#484848"
                      ></path>
                      <path
                        d="M12.334 4.66694C12.8862 4.66694 13.3339 4.21924 13.3339 3.66697C13.3339 3.1147 12.8862 2.66699 12.334 2.66699C11.7817 2.66699 11.334 3.1147 11.334 3.66697C11.334 4.21924 11.7817 4.66694 12.334 4.66694Z"
                        fill="#484848"
                      ></path>
                      <path
                        d="M7.9999 4C5.79035 4 4 5.79054 4 7.9999C4 10.2084 5.79035 12.0002 7.9999 12.0002C10.2088 12.0002 11.9998 10.2084 11.9998 7.9999C11.9998 5.79054 10.2088 4 7.9999 4ZM7.9999 10.6668C6.52732 10.6668 5.33337 9.47287 5.33337 7.9999C5.33337 6.52693 6.52732 5.33337 7.9999 5.33337C9.47248 5.33337 10.6664 6.52693 10.6664 7.9999C10.6664 9.47287 9.47248 10.6668 7.9999 10.6668Z"
                        fill="#484848"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_273_11760">
                        <rect width="16" height="16" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>

              <li>
                <a href="#" className="bg-slate-300 w-10 h-10 flex rounded-full items-center justify-center duration-300">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_273_11771)">
                      <path
                        d="M15.9958 16.0005L15.9998 15.9998V10.1318C15.9998 7.26114 15.3818 5.0498 12.0258 5.0498C10.4125 5.0498 9.32985 5.93514 8.88785 6.77447H8.84118V5.3178H5.65918V15.9998H8.97251V10.7105C8.97251 9.31781 9.23651 7.97114 10.9612 7.97114C12.6605 7.97114 12.6858 9.56047 12.6858 10.7998V16.0005H15.9958Z"
                        fill="#484848"
                      ></path>
                      <path
                        d="M0.263672 5.31836H3.58101V16.0004H0.263672V5.31836Z"
                        fill="#484848"
                      ></path>
                      <path
                        d="M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0Z"
                        fill="#484848"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_273_11771">
                        <rect width="16" height="16" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
              <li>
                <a className="bg-slate-300 w-10 h-10 flex rounded-full items-center justify-center duration-300" href="#">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_273_11776)">
                      <path
                        d="M9.4893 6.77491L15.3176 0H13.9365L8.87577 5.88256L4.8338 0H0.171875L6.28412 8.89547L0.171875 16H1.55307L6.8973 9.78782L11.1659 16H15.8278L9.48896 6.77491H9.4893ZM7.59756 8.97384L6.97826 8.08805L2.05073 1.03974H4.17217L8.14874 6.72795L8.76804 7.61374L13.9371 15.0075H11.8157L7.59756 8.97418V8.97384Z"
                        fill="#484848"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_273_11776">
                        <rect width="16" height="16" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Property_form;
