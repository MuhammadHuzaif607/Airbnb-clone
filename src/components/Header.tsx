'use client';
import Link from 'next/link';
// import { Bell, User, TableOfContents } from 'lucide-react';
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from '@/components/ui/hover-card';
// import { Separator } from '@/components/ui/separator';
// import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { SignInSchema } from '@/Schemas/LoginSchema';
import { SignUpSchema } from '@/Schemas/SignUpSchema';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { z } from 'zod';
const Header = () => {
  const links = [
    {
      item: 'About Us',
      href: '/about-us',
    },
    {
      item: 'Blog',
      href: '/blog',
    },
    {
      item: 'Map View',
      href: '/map-view',
    },
    {
      item: 'Help Center',
      href: '/help-center',
    },
  ];
  const form = useForm({
    resolver: zodResolver(SignInSchema),
  });

  const SignUpform = useForm({
    resolver: zodResolver(SignUpSchema),
  });

  function SignInSubmit(values: z.infer<typeof SignInSchema>) {
    console.log(values);
  }

  function SignUpSubmit(values: z.infer<typeof SignUpSchema>) {
    console.log(values);
  }

  return (
    <header className="py-5">
      <div className="container mx-auto">
        <div className="flex items-center flex-wrap">
          <div className="  lg:w-3/12 w-4/12">
            <div className="header-logo">
              <a href="https://luckybackyards.com/staging">
                {' '}
                <svg
                  width="212"
                  height="46"
                  viewBox="0 0 252 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M61.557 27.9556H58.0215V41.8585H65.6516V38.7382H61.557V27.9556Z"
                    fill="#4CAF50"
                  ></path>
                  <path
                    d="M74.4655 36.3542C74.4655 36.901 74.4655 37.579 74.2404 38.104C74.0372 38.6143 73.5871 39.008 72.7086 39.008C71.8302 39.008 71.4018 38.5778 71.155 38.0311C70.93 37.4843 70.9154 36.8281 70.9154 36.3615V27.9629H67.3799V36.3615C67.3799 38.4102 67.6194 39.3871 68.7665 40.6483C69.9063 41.8877 71.7431 42.1356 72.7522 42.1356C74.4728 42.1356 75.7287 41.5524 76.6217 40.6338C77.5001 39.7297 78.0083 38.7018 78.0083 36.3688V27.9702H74.4728V36.3688L74.4655 36.3542Z"
                    fill="#4CAF50"
                  ></path>
                  <path
                    d="M87.5266 30.8064C89.4359 30.8064 90.4814 32.1989 90.8734 33.2268H94.5759C94.1984 31.047 91.8825 27.686 87.5411 27.686C83.1997 27.686 80.2812 31.3313 80.2812 34.8818C80.2812 38.6364 83.236 42.1139 87.5774 42.1139C90.9242 42.1139 93.7701 39.9341 94.5759 36.6461H90.8734C90.6483 37.1345 89.7481 38.9936 87.5411 38.9936C85.3341 38.9936 83.8168 36.9668 83.8168 34.8599C83.8168 32.8842 85.1454 30.7991 87.5193 30.7991L87.5266 30.8064Z"
                    fill="#4CAF50"
                  ></path>
                  <path
                    d="M108.355 27.9556H104.653L100.704 34.2108V27.9556H97.168V41.8585H100.704V35.8439L104.522 41.8585H108.82L103.789 34.8669L108.355 27.9556Z"
                    fill="#4CAF50"
                  ></path>
                  <path
                    d="M115.2 33.5328L113.146 27.9556H109.312L113.443 36.8062V41.8585H116.979V36.8062L121.081 27.9556H117.277L115.2 33.5328Z"
                    fill="#4CAF50"
                  ></path>
                  <path
                    d="M137.096 34.4004C138.221 33.7588 138.707 32.6725 138.707 31.6008C138.707 30.4198 138.279 29.4939 137.473 28.896C136.689 28.2763 135.549 27.9556 134.126 27.9556H129.037V41.8585H133.582C135.919 41.8585 136.834 41.7273 138.112 40.6556C138.954 39.963 139.382 38.7382 139.382 37.63C139.382 37.0468 139.324 35.1877 137.103 34.4004H137.096ZM132.565 31.0759H133.821C134.104 31.0759 134.475 31.0759 134.772 31.2071C135.07 31.3383 135.317 31.6008 135.317 32.1257C135.317 32.6506 135.077 32.9496 134.758 33.1027C134.438 33.2339 134.068 33.2339 133.821 33.2339H132.565V31.0759ZM135.281 38.5705C134.903 38.7382 134.46 38.7382 134.235 38.7382H132.573V36.2011H134.235C134.518 36.2011 134.961 36.2011 135.317 36.3542C135.694 36.5073 135.992 36.8062 135.992 37.404C135.992 38.0602 135.673 38.4028 135.281 38.5705Z"
                    fill="#4CAF50"
                  ></path>
                  <path
                    d="M145.351 27.9556L139.87 41.8585H143.703L144.342 39.8464H149.185L149.838 41.8585H153.707L148.393 27.9556H145.344H145.351ZM145.221 37.0322L146.716 32.184L148.27 37.0322H145.221Z"
                    fill="#4CAF50"
                  ></path>
                  <path
                    d="M161.069 30.8064C162.978 30.8064 164.023 32.1989 164.415 33.2268H168.118C167.74 31.047 165.424 27.686 161.083 27.686C156.742 27.686 153.823 31.3313 153.823 34.8818C153.823 38.6364 156.778 42.1139 161.119 42.1139C164.466 42.1139 167.312 39.9341 168.118 36.6461H164.415C164.19 37.1345 163.29 38.9936 161.083 38.9936C158.876 38.9936 157.359 36.9668 157.359 34.8599C157.359 32.8842 158.687 30.7991 161.061 30.7991L161.069 30.8064Z"
                    fill="#4CAF50"
                  ></path>
                  <path
                    d="M181.89 27.9556H178.187L174.238 34.2108V27.9556H170.702V41.8585H174.238V35.8439L178.056 41.8585H182.361L177.323 34.8669L181.89 27.9556Z"
                    fill="#4CAF50"
                  ></path>
                  <path
                    d="M190.819 27.9556L188.743 33.5328L186.681 27.9556H182.848L186.979 36.8062V41.8585H190.514V36.8062L194.616 27.9556H190.819Z"
                    fill="#4CAF50"
                  ></path>
                  <path
                    d="M198.935 27.9556L193.454 41.8585H197.287L197.926 39.8464H202.768L203.422 41.8585H207.291L201.977 27.9556H198.928H198.935ZM198.805 37.0322L200.3 32.184L201.854 37.0322H198.805Z"
                    fill="#4CAF50"
                  ></path>
                  <path
                    d="M218.902 35.2601C219.294 34.6404 219.592 33.8166 219.592 32.7449C219.592 31.2212 219.069 29.8506 217.907 28.9466C217.138 28.3487 215.795 27.9478 213.624 27.9478H209.094V41.8507H212.629V31.0681H213.936C214.422 31.0681 214.982 31.1993 215.374 31.4399C215.838 31.7388 216.194 32.3221 216.194 33.0584C216.194 33.8312 215.838 34.4873 215.41 34.7644C214.945 35.0633 214.176 35.1435 213.275 35.1435H212.695L216.303 41.8507H219.955L217.094 36.7401C217.748 36.4558 218.423 35.9892 218.887 35.2528L218.902 35.2601Z"
                    fill="#4CAF50"
                  ></path>
                  <path
                    d="M226.276 27.9551H221.695V41.858H226.538C231.794 41.858 233.667 38.6648 233.667 34.8664C233.667 33.3427 233.347 31.8627 232.396 30.5432C230.603 27.9478 227.83 27.9478 226.276 27.9478V27.9551ZM226.741 38.7377H225.224V31.0754H226.755C228.331 31.0754 229.035 31.7315 229.449 32.3512C229.957 33.1386 230.124 34.1374 230.124 34.9248C230.124 36.9005 229.376 38.7377 226.741 38.7377Z"
                    fill="#4CAF50"
                  ></path>
                  <path
                    d="M241.747 33.6861C239.257 32.5561 238.887 32.3884 238.887 31.7542C238.887 31.1199 239.489 30.6606 240.107 30.6606C241.196 30.6606 241.304 31.5427 241.377 32.0166H244.876C244.818 28.6703 242.125 27.6934 240.215 27.6934C237.892 27.6934 235.373 29.1806 235.373 31.9802C235.373 34.5902 237.783 35.5671 238.764 35.9608C240.898 36.8648 241.479 37.0908 241.479 37.8198C241.479 38.4614 240.97 39.154 240.128 39.154C239.678 39.154 238.691 38.8697 238.691 37.2585H235.177C235.083 39.9851 236.542 42.1212 240.172 42.1212C243.802 42.1212 245 39.8831 245 37.6667C245 36.0483 244.346 34.8453 241.762 33.6861H241.747Z"
                    fill="#4CAF50"
                  ></path>
                  <path
                    d="M28.2207 29.7419C28.9031 29.7783 29.5347 29.3773 29.7888 28.7431C30.0066 28.189 30.2679 27.5401 30.4349 27.1464C37.0341 11.2021 27.3349 9.67842 27.3349 9.67842C24.9828 9.30661 23.2839 10.0794 22.1078 11.0855C22.057 11.1365 22.0135 11.1876 21.9409 11.2386C21.861 11.3042 21.7957 11.3698 21.7231 11.4354C21.5779 11.5812 21.4399 11.7198 21.3165 11.8656C20.1187 13.3966 20.5252 15.4087 20.5252 15.4087C19.458 14.2641 17.7011 14.4318 16.9751 14.5776C15.3271 15.0515 13.4541 16.1815 12.5611 18.8644C12.5611 18.8644 9.27243 28.7941 28.2207 29.7491V29.7419Z"
                    fill="#4CAF50"
                  ></path>
                  <path
                    d="M31.6755 32.7744C30.9931 32.7379 30.3615 33.1389 30.1074 33.7732C29.8896 34.3273 29.6282 34.9761 29.4612 35.3698C22.862 51.3141 32.5612 52.8378 32.5612 52.8378C34.9134 53.2096 36.6122 52.4368 37.7883 51.4307C37.8391 51.3797 37.8827 51.3287 37.9553 51.2776C38.0351 51.212 38.1005 51.1464 38.1731 51.0808C38.3183 50.935 38.4562 50.7965 38.5796 50.6507C39.7775 49.1197 39.3709 47.1075 39.3709 47.1075C40.4381 48.2521 42.195 48.0844 42.921 47.9386C44.569 47.4647 46.442 46.3347 47.335 43.6518C47.335 43.6518 50.6237 33.7221 31.6755 32.7671V32.7744Z"
                    fill="#4CAF50"
                  ></path>
                  <path
                    d="M49.8911 23.2089C49.8258 23.1287 49.7604 23.0631 49.6951 22.9902C49.5499 22.8444 49.412 22.7059 49.2668 22.5819C47.7422 21.379 45.7385 21.7873 45.7385 21.7873C46.8783 20.7156 46.7113 18.9513 46.5661 18.2222C46.0942 16.5673 44.9689 14.6863 42.2973 13.7896C42.2973 13.7896 32.4094 10.487 31.4583 29.5152C31.422 30.2005 31.8213 30.8348 32.4529 31.0899C33.0047 31.3086 33.6508 31.5711 34.0428 31.7388C49.9202 38.3658 51.4375 28.6257 51.4375 28.6257C51.8077 26.2636 51.0382 24.5577 50.0363 23.3766C49.9855 23.3256 49.9347 23.2818 49.8839 23.2089H49.8911Z"
                    fill="#4CAF50"
                  ></path>
                  <path
                    d="M10.012 39.2987C10.0773 39.3789 10.1426 39.4445 10.208 39.5174C10.3532 39.6632 10.4911 39.8017 10.6363 39.9256C12.1609 41.1286 14.1646 40.7203 14.1646 40.7203C13.0248 41.792 13.1918 43.5563 13.337 44.2854C13.8089 45.9403 14.9342 47.8212 17.6058 48.718C17.6058 48.718 27.4937 52.0206 28.4447 32.9924C28.481 32.3071 28.0818 31.6728 27.4501 31.4176C26.8984 31.1989 26.2523 30.9365 25.8602 30.7688C9.98293 24.1417 8.46562 33.8818 8.46562 33.8818C8.09537 36.2439 8.86491 37.9499 9.86677 39.131C9.91759 39.182 9.96841 39.2258 10.0192 39.2987H10.012Z"
                    fill="#4CAF50"
                  ></path>
                  <path
                    d="M7.61651 59.3416C7.17366 59.4218 6.89778 59.8738 7.03572 60.304L8.51673 64.9261C8.74905 65.6406 9.56215 65.976 10.2228 65.626C14.1504 63.5701 25.7879 56.5785 26.4558 45.6865C26.4558 45.6865 21.1053 56.7826 7.61651 59.3416Z"
                    fill="#4CAF50"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="lg:w-5/12 lg:block hidden">
            <div className="header-nav">
              <ul
                id="menu-non-logged-in"
                className="header-nav font-medium flex gap-x-[30px] items-center justify-center"
              >
                {links.map((link) => {
                  return (
                    <>
                      <li>
                        <Link href={link.href}>{link.item}</Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className=" lg:w-4/12 w-8/12">
            <div className="sign-area flex items-center justify-end gap-x-[22px]">
              <div className="icon-box lg:flex hidden"></div>
              <div className="sign-btn lg:block hidden relative group">
                <a
                  href="javascript:void(0)"
                  className="text-[16px] px-[10px] py-[5px] font-medium"
                >
                  Sign In
                </a>
                <div className="two-btns absolute top-[32px] w-[132px] bg-white right-0  rounded-lg shadow-md opacity-0 z-[9] invisible duration-500 py-[15px] group-hover:opacity-100 group-hover:visible ">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="text-sm border-0 duration-300 flex items-center gap-x-[10px] w-full  mb-1 rounded-0 py-[5px] px-[10px] font-medium  hover:bg-secondary hover:text-primary "
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop2"
                      >
                        <span className="w-[24px] h-[24px] flex rounded-[100%] items-center justify-center bg-secondary">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.99998 7.79503C7.35833 7.79503 6.80903 7.56657 6.35208 7.10964C5.89514 6.65269 5.66667 6.10339 5.66667 5.46173C5.66667 4.82007 5.89514 4.27077 6.35208 3.81383C6.80903 3.35689 7.35833 3.12842 7.99998 3.12842C8.64164 3.12842 9.19094 3.35689 9.64788 3.81383C10.1048 4.27077 10.3333 4.82007 10.3333 5.46173C10.3333 6.10339 10.1048 6.65269 9.64788 7.10964C9.19094 7.56657 8.64164 7.79503 7.99998 7.79503ZM3 12.872V11.3899C3 11.0634 3.08868 10.7611 3.26603 10.4829C3.44338 10.2047 3.68034 9.9908 3.97692 9.84122C4.63589 9.51814 5.30064 9.27583 5.97115 9.1143C6.64166 8.95277 7.31794 8.872 7.99998 8.872C8.68203 8.872 9.35831 8.95277 10.0288 9.1143C10.6993 9.27583 11.3641 9.51814 12.023 9.84122C12.3196 9.9908 12.5566 10.2047 12.7339 10.4829C12.9113 10.7611 13 11.0634 13 11.3899V12.872H3ZM3.99998 11.872H12V11.3899C12 11.2549 11.9609 11.1299 11.8827 11.0149C11.8045 10.9 11.6983 10.8062 11.5641 10.7335C10.9897 10.4506 10.4041 10.2363 9.80712 10.0906C9.21016 9.94483 8.60778 9.87197 7.99998 9.87197C7.39218 9.87197 6.78981 9.94483 6.19285 10.0906C5.59589 10.2363 5.01024 10.4506 4.43588 10.7335C4.30169 10.8062 4.1955 10.9 4.1173 11.0149C4.03909 11.1299 3.99998 11.2549 3.99998 11.3899V11.872ZM7.99998 6.79507C8.36665 6.79507 8.68054 6.66451 8.94165 6.4034C9.20276 6.14229 9.33332 5.8284 9.33332 5.46173C9.33332 5.09507 9.20276 4.78118 8.94165 4.52007C8.68054 4.25896 8.36665 4.1284 7.99998 4.1284C7.63332 4.1284 7.31943 4.25896 7.05832 4.52007C6.79721 4.78118 6.66665 5.09507 6.66665 5.46173C6.66665 5.8284 6.79721 6.14229 7.05832 6.4034C7.31943 6.66451 7.63332 6.79507 7.99998 6.79507Z"
                              fill="#484848"
                            ></path>
                          </svg>
                        </span>
                        Log In
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md p-0">
                      <div
                        style={{
                          backgroundImage:
                            'url("https://luckybackyards.com/wp-content/themes/luckybackyard/assets/images/popup-bg.png");',
                        }}
                        className="bg-no-repeat bg-cover py-8 text-center"
                      >
                        <h1>Log in to your account</h1>
                      </div>
                      <Form {...form}>
                        <form
                          onSubmit={form.handleSubmit(SignInSubmit)}
                          className="space-y-8"
                        >
                          <FormField
                            control={form.control}
                            name="identifier"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Username or Email address</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Username or email address"
                                    {...field}
                                    type="text"
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="password"
                            type="password"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>password</FormLabel>
                                <FormControl>
                                  <Input placeholder="Password" {...field} />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          <Button type="submit">Submit</Button>
                        </form>
                      </Form>
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="text-sm border-0 duration-300 flex items-center gap-x-[10px] w-full  mb-1 rounded-0 py-[5px] px-[10px] hover:bg-secondary hover:text-primary font-medium"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        <span className="w-[24px] h-[24px] flex rounded-[100%] items-center justify-center bg-secondary">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.66663 9.07705C4.36834 9.07705 4.11429 8.97214 3.90447 8.76231C3.69464 8.55249 3.58973 8.29844 3.58973 8.00015C3.58973 7.70186 3.69464 7.4478 3.90447 7.23798C4.11429 7.02816 4.36834 6.92325 4.66663 6.92325C4.96492 6.92325 5.21898 7.02816 5.4288 7.23798C5.63862 7.4478 5.74353 7.70186 5.74353 8.00015C5.74353 8.29844 5.63862 8.55249 5.4288 8.76231C5.21898 8.97214 4.96492 9.07705 4.66663 9.07705ZM4.66663 11.6668C3.64954 11.6668 2.78417 11.31 2.0705 10.5963C1.35683 9.88261 1 9.01724 1 8.00015C1 6.98306 1.35683 6.11768 2.0705 5.40401C2.78417 4.69034 3.64954 4.3335 4.66663 4.3335C5.38116 4.3335 6.02731 4.5179 6.60508 4.88671C7.18286 5.25551 7.62388 5.73777 7.92815 6.3335H13.9295L15.5961 8.00015L13.032 10.5514L11.7949 9.62191L10.5256 10.5642L9.22435 9.6668H7.92815C7.62388 10.2582 7.18286 10.7394 6.60508 11.1104C6.02731 11.4813 5.38116 11.6668 4.66663 11.6668ZM4.66663 10.6668C5.30596 10.6668 5.85959 10.4737 6.32753 10.0873C6.79548 9.701 7.10082 9.22749 7.24355 8.66681H9.53845L10.4987 9.33091L11.8013 8.37836L12.9333 9.24373L14.1769 8.00015L13.5102 7.33348H7.24355C7.10082 6.7728 6.79548 6.2993 6.32753 5.91296C5.85959 5.52664 5.30596 5.33348 4.66663 5.33348C3.9333 5.33348 3.30552 5.59459 2.7833 6.11681C2.26108 6.63904 1.99997 7.26681 1.99997 8.00015C1.99997 8.73348 2.26108 9.36126 2.7833 9.88348C3.30552 10.4057 3.9333 10.6668 4.66663 10.6668Z"
                              fill="#484848"
                            ></path>
                          </svg>
                        </span>{' '}
                        Sign Up
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <div
                        style={{
                          backgroundImage:
                            'url("https://luckybackyards.com/wp-content/themes/luckybackyard/assets/images/popup-bg.png");',
                        }}
                        className="bg-no-repeat bg-cover py-8 text-center"
                      >
                        <h1>Create your account</h1>
                      </div>
                      <Form {...SignUpform}>
                        <form
                          onSubmit={SignUpform.handleSubmit(SignUpSubmit)}
                          className="space-y-8"
                        >
                          <FormField
                            control={SignUpform.control}
                            name="username"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>User Name</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="User Name"
                                    {...field}
                                    type="text"
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={SignUpform.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input placeholder="Email" {...field} />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={SignUpform.control}
                            name="password"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                  <Input placeholder="Password" {...field} />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          <Button type="submit">Submit</Button>
                        </form>
                      </Form>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <div className="btn-box lg:block hidden">
                <a
                  href="/staging/submit-property-1/"
                  className="t-btn text-white inline-flex rounded-[50px] duration-300 w-[165px] h-[60px] items-center justify-center p-3 gap-3 bg-main font-medium"
                >
                  Submit Property
                </a>
              </div>
              <div className="hamburger d-block d-lg-none lg:block hidden">
                <i className="fas fa-bars"></i>
              </div>
            </div>
          </div>
          {/* <div className="lg:w-4/12 w-8/12">
            <div className="flex flex-wrap gap-x-3 items-center justify-center">
              <div className="btn-box lg:block hidden">
                <Link
                  href="#"
                  className="t-btn text-white inline-flex rounded-[50px] duration-300 w-[165px] h-[60px] items-center justify-center px-3 py-2 gap-3 bg-main font-medium"
                >
                  Submit Property
                </Link>
              </div>
              <div className="bell-icon bg-gray-200 rounded-full w-11 h-11 flex items-center justify-center">
                <Bell width={20} height={20} />
              </div>
              <HoverCard>
                <HoverCardTrigger><div className="profile-icons flex gap-x-3 border-2 border-br py-2 px-3 rounded-3xl">
                <TableOfContents />
                  <User />
                </div></HoverCardTrigger>
                <HoverCardContent className='p-4 shadow-2xl '>
                  <ul className="flex gap-y-2 flex-col [&>li]:text-gray-500 [&>li]:font-normal [&>li]:text-sm [&>li:hover]:text-main duration-300 ">
                    <li>
                      <Link href="#">Switch to Hosting</Link>
                    </li>
                    <Separator />
                    <li>
                      <Link href="#">Messages</Link>
                    </li>
                    <li>
                      <Link href="#">Reseervation</Link>
                    </li>
                    <li>
                      <Link href="#">WishList</Link>
                    </li>
                    <Separator />
                    <li>
                      <Link href="#">Profile</Link>
                    </li>
                    <li>
                      <Link href="#">Account</Link>
                    </li>
                    <li>
                      <Link href="#">Help Center</Link>
                    </li>
                    <Separator />
                    <li>
                      <Link href="#">Language and translation</Link>
                    </li>
                    <li>
                      <Link href="#">USD</Link>
                    </li>
                    <Separator />
                    <li>
                      <Link href="#">SIgnout</Link>
                    </li>
                  </ul>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
