import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <>
      <footer className="py-20 bg-main">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="flex flex-wrap items-center lg:items-start justify-center lg:justify-start gap-y-4 sm:gap-y-0">
            <div className="lg:w-[32%] sm:w-[48%] ">
              <div className="footer-logo">
                <Link href="https://luckybackyards.com">
                  <Image
                    data-src="https://luckybackyards.com/wp-content/uploads/2024/03/footer-logo.svg"
                    width="212"
                    height="46"
                    alt="brand logo"
                    src="https://luckybackyards.com/wp-content/uploads/2024/03/footer-logo.svg"
                    className=" lazyloaded"
                  ></Image>
                </Link>
              </div>
              <div className="text">
                <p className="text-sm mt-4 max-w-56 text-footer_para">
                  Not every backyard has a rainbow or a pot of gold; however, if
                  you have a beautiful backyard you are in luck. People want to
                  rent it!
                </p>
              </div>
            </div>
            <div className=" lg:w-[32%] sm:w-[48%]">
              <div className="text">
                <h5 className="text-lg font-semibold mb-4 text-footer_para">
                  Company
                </h5>
              </div>
              <ul className="columns-2">
                <li className="mb-3">
                  <Link
                    className="text-footer_para text-sm m-0 hover:text-white duration-300"
                    href="/map-property-list/"
                  >
                    Map View
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className="text-footer_para text-sm m-0 hover:text-white duration-300"
                    href="https://luckybackyards.com/about-us/"
                  >
                    About Us
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className="text-footer_para text-sm m-0 hover:text-white duration-300"
                    href="https://luckybackyards.com/blog/"
                  >
                    Blog
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className="text-footer_para text-sm m-0 hover:text-white duration-300"
                    href="/help-center/"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" lg:w-[32%] sm:w-[48%] mt-4 lg:mt-0">
              <div className="text">
                <h5 className="text-lg font-semibold mb-4 text-footer_para">
                  Contact Us
                </h5>
              </div>
              <ul className="about-icon-list">
                <li>
                  <Link
                    href="mailto:luckybackyards@gmail.com"
                    className="text-sm mt-4  text-footer_para flex gap-x-3 mb-3 hover:text-white duration-300"
                  >
                    {' '}
                    <Image
                      width="20"
                      height="20"
                      alt="emailIcon"
                      src="https://luckybackyards.com/wp-content/uploads/2024/03/email-logo.svg"
                    ></Image>
                    luckybackyards@gmail.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://maps.app.goo.gl/x6sY1xXSWwrWi1676"
                    className="text-sm mt-4 max-w-64 text-footer_para flex gap-x-3 mb-3 hover:text-white duration-300"
                  >
                    <Image
                      width="20"
                      height="20"
                      alt="emailIcon"
                      src="https://luckybackyards.com/wp-content/uploads/2024/03/address-logo.svg"
                    ></Image>
                    4445 Corporation Ln. Ste 264, Virginia Beach, VA 23462
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap mt-5 gap-x-4">
            <div className="lg:w-[65%] ">
              <div className="contact-box rounded-3xl flex justify-between items-center py-6 px-8 text-white flex-wrap gap-x-5 max-w-[700px] bg-footer_para">
                <div className="text">
                  <h4 className="text-2xl font-medium mb-6">
                    Do you have any questions?
                  </h4>
                  <p className="text-sm mt-4 ">
                    Located just 30 minutes from the Seychelles
                    <br />
                    International Airport and 45…
                  </p>
                </div>
                <div className="button-box">
                  <Link
                    href="https://luckybackyards.com/help-center/"
                    className="bg-white text-text rounded-full py-5 px-9 duration-300 text-lg font-medium inline-block hover:bg-main hover:text-white"
                  >
                    Visit Help Center
                  </Link>
                </div>
              </div>
            </div>
            <div className=" lg:w-[32%]">
              <div className="text">
                <h5 className="text-lg font-semibold mb-4 text-footer_para">
                  {' '}
                  Social Links
                </h5>
              </div>
              <div className="si">
                <ul className="social-icons flex flex-wrap gap-x-4">
                  <li className="mb-2">
                    <a
                      href=" https://www.facebook.com/luckybackyards"
                      className="bg-footer_para text-white flex w-7 h-7 rounded-full items-center justify-center duration-300 hover:bg-white hover:text-footer_para"
                    >
                      <Facebook width={18} height={18} />
                    </a>
                  </li>
                  <li className="mb-2">
                    {' '}
                    <a
                      href=" https://www.instagram.com/luckybackyards/"
                      target="_blank"
                      className="bg-footer_para text-white flex w-7 h-7 rounded-full items-center justify-center duration-300 hover:bg-white hover:text-footer_para"
                    >
                      <Instagram width={18} height={18} />
                    </a>{' '}
                  </li>
                  <li className="mb-2">
                    {' '}
                    <a
                      href=" https://www.linkedin.com/company/lucky-backyards/about/"
                      className="bg-footer_para text-white flex w-7 h-7 rounded-full items-center justify-center duration-300 hover:bg-white hover:text-footer_para"
                    >
                      <Linkedin width={18} height={18} />
                    </a>{' '}
                  </li>
                  <li className="mb-2">
                    <a
                      href=" https://twitter.com/luckybackyards"
                      target="_blank"
                      className="bg-footer_para text-white flex w-7 h-7 rounded-full items-center justify-center duration-300 hover:bg-white hover:text-footer_para group"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="18"
                      >
                        <path
                          d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                          fill="#fff"
                          className="group-hover:fill-footer_para"
                        ></path>
                      </svg>
                    </a>{' '}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Copy Rights Section */}
      <section className="py-8">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="flex flex-wrap ">
            <div className="md:w-full">
              <div className="flex justify-between">
                <ul className="flex gap-x-7 [&>li]:text-gray-500 [&>li]:font-normal [&>li]:text-sm [&>li:hover]:text-main duration-300">
                  <li>
                    <a href="https://luckybackyards.com/help-center/">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="https://luckybackyards.com/terms-and-condition/">
                      Terms &amp; Condition
                    </a>
                  </li>
                  <li>
                    <a href="https://luckybackyards.com/privacy-policy/">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://luckybackyards.com/nondiscrimination-policy/">
                      Nondiscrimination Policy
                    </a>
                  </li>
                </ul>
                <p className='text-sm m-0 '>© 2024 All Rights Reserved, Lucky Backyards Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
export default Footer;
