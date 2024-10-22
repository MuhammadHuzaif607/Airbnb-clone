import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { DateRangePicker } from './Datepicker';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Page from '@/components/abc';

export default function TabsDemo() {
  return (
    <section
      style={{
        backgroundImage:
          'url(https://luckybackyards.com/wp-content/themes/luckybackyard/assets/images/main-title-bg.png)',
      }}
      className="py-8"
    >
      <div className="max-w-screen-xl mx-auto px-8">
        <Tabs defaultValue="account">
          <TabsList className="  bg-white py-3 px-4 rounded-[20px] rounded-br-none rounded-bl-none flex items-center justify-between max-w-72 h-16">
            <TabsTrigger
              value="account"
              className=" border-0 duration-300 py-2 rounded-full hover:bg-text hover:text-white gap-x-2 group"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.3077 21.5001C4.80257 21.5001 4.375 21.3251 4.025 20.9751C3.675 20.6251 3.5 20.1975 3.5 19.6924V6.30784C3.5 5.80271 3.675 5.37514 4.025 5.02514C4.375 4.67514 4.80257 4.50014 5.3077 4.50014H6.69233V2.38477H8.23075V4.50014H15.8077V2.38477H17.3076V4.50014H18.6922C19.1974 4.50014 19.625 4.67514 19.975 5.02514C20.325 5.37514 20.5 5.80271 20.5 6.30784V19.6924C20.5 20.1975 20.325 20.6251 19.975 20.9751C19.625 21.3251 19.1974 21.5001 18.6922 21.5001H5.3077ZM5.3077 20.0001H18.6922C18.7692 20.0001 18.8397 19.9681 18.9038 19.904C18.9679 19.8398 19 19.7693 19 19.6924V10.3078H4.99997V19.6924C4.99997 19.7693 5.03202 19.8398 5.09612 19.904C5.16024 19.9681 5.23077 20.0001 5.3077 20.0001ZM4.99997 8.80787H19V6.30784C19 6.23091 18.9679 6.16038 18.9038 6.09627C18.8397 6.03217 18.7692 6.00012 18.6922 6.00012H5.3077C5.23077 6.00012 5.16024 6.03217 5.09612 6.09627C5.03202 6.16038 4.99997 6.23091 4.99997 6.30784V8.80787ZM12 14.077C11.7551 14.077 11.5465 13.9908 11.374 13.8184C11.2016 13.646 11.1154 13.4373 11.1154 13.1924C11.1154 12.9476 11.2016 12.7389 11.374 12.5665C11.5465 12.3941 11.7551 12.3078 12 12.3078C12.2448 12.3078 12.4535 12.3941 12.6259 12.5665C12.7984 12.7389 12.8846 12.9476 12.8846 13.1924C12.8846 13.4373 12.7984 13.646 12.6259 13.8184C12.4535 13.9908 12.2448 14.077 12 14.077ZM7.99998 14.077C7.75511 14.077 7.54646 13.9908 7.37403 13.8184C7.20159 13.646 7.11538 13.4373 7.11538 13.1924C7.11538 12.9476 7.20159 12.7389 7.37403 12.5665C7.54646 12.3941 7.75511 12.3078 7.99998 12.3078C8.24484 12.3078 8.45349 12.3941 8.62593 12.5665C8.79836 12.7389 8.88458 12.9476 8.88458 13.1924C8.88458 13.4373 8.79836 13.646 8.62593 13.8184C8.45349 13.9908 8.24484 14.077 7.99998 14.077ZM16 14.077C15.7551 14.077 15.5465 13.9908 15.374 13.8184C15.2016 13.646 15.1154 13.4373 15.1154 13.1924C15.1154 12.9476 15.2016 12.7389 15.374 12.5665C15.5465 12.3941 15.7551 12.3078 16 12.3078C16.2448 12.3078 16.4535 12.3941 16.6259 12.5665C16.7984 12.7389 16.8846 12.9476 16.8846 13.1924C16.8846 13.4373 16.7984 13.646 16.6259 13.8184C16.4535 13.9908 16.2448 14.077 16 14.077ZM12 18.0001C11.7551 18.0001 11.5465 17.9139 11.374 17.7415C11.2016 17.569 11.1154 17.3604 11.1154 17.1155C11.1154 16.8706 11.2016 16.662 11.374 16.4896C11.5465 16.3171 11.7551 16.2309 12 16.2309C12.2448 16.2309 12.4535 16.3171 12.6259 16.4896C12.7984 16.662 12.8846 16.8706 12.8846 17.1155C12.8846 17.3604 12.7984 17.569 12.6259 17.7415C12.4535 17.9139 12.2448 18.0001 12 18.0001ZM7.99998 18.0001C7.75511 18.0001 7.54646 17.9139 7.37403 17.7415C7.20159 17.569 7.11538 17.3604 7.11538 17.1155C7.11538 16.8706 7.20159 16.662 7.37403 16.4896C7.54646 16.3171 7.75511 16.2309 7.99998 16.2309C8.24484 16.2309 8.45349 16.3171 8.62593 16.4896C8.79836 16.662 8.88458 16.8706 8.88458 17.1155C8.88458 17.3604 8.79836 17.569 8.62593 17.7415C8.45349 17.9139 8.24484 18.0001 7.99998 18.0001ZM16 18.0001C15.7551 18.0001 15.5465 17.9139 15.374 17.7415C15.2016 17.569 15.1154 17.3604 15.1154 17.1155C15.1154 16.8706 15.2016 16.662 15.374 16.4896C15.5465 16.3171 15.7551 16.2309 16 16.2309C16.2448 16.2309 16.4535 16.3171 16.6259 16.4896C16.7984 16.662 16.8846 16.8706 16.8846 17.1155C16.8846 17.3604 16.7984 17.569 16.6259 17.7415C16.4535 17.9139 16.2448 18.0001 16 18.0001Z"
                  fill="#484848"
                  className="group-hover:fill-white group-data-[state=active]:fill-white duration-300"
                ></path>
              </svg>
              <span className="text-base font-medium ">By Day</span>
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="border-0 py-2 rounded-full hover:bg-text hover:text-white gap-x-2 group"
            >
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9731 14.5269L14.0269 13.4731L10.25 9.6959V4.99998H8.75V10.3038L12.9731 14.5269ZM9.50165 19.5C8.18772 19.5 6.95268 19.2506 5.79655 18.752C4.6404 18.2533 3.63472 17.5765 2.7795 16.7217C1.92427 15.8669 1.24721 14.8616 0.748325 13.706C0.249442 12.5504 0 11.3156 0 10.0017C0 8.68772 0.249333 7.45268 0.748 6.29655C1.24667 5.1404 1.92342 4.13472 2.77825 3.2795C3.6331 2.42427 4.63834 1.74721 5.79398 1.24833C6.94959 0.749443 8.18437 0.5 9.4983 0.5C10.8122 0.5 12.0473 0.749334 13.2034 1.248C14.3596 1.74667 15.3652 2.42342 16.2205 3.27825C17.0757 4.1331 17.7527 5.13834 18.2516 6.29398C18.7505 7.44959 19 8.68437 19 9.9983C19 11.3122 18.7506 12.5473 18.252 13.7034C17.7533 14.8596 17.0765 15.8652 16.2217 16.7205C15.3669 17.5757 14.3616 18.2527 13.206 18.7516C12.0504 19.2505 10.8156 19.5 9.50165 19.5ZM9.49998 18C11.7166 18 13.6041 17.2208 15.1625 15.6625C16.7208 14.1041 17.5 12.2166 17.5 9.99998C17.5 7.78331 16.7208 5.89581 15.1625 4.33748C13.6041 2.77914 11.7166 1.99998 9.49998 1.99998C7.28331 1.99998 5.39581 2.77914 3.83748 4.33748C2.27914 5.89581 1.49998 7.78331 1.49998 9.99998C1.49998 12.2166 2.27914 14.1041 3.83748 15.6625C5.39581 17.2208 7.28331 18 9.49998 18Z"
                  fill="#484848"
                  className="group-hover:fill-white group-data-[state=active]:fill-white duration-300"
                ></path>
              </svg>
              <span className="text-base font-medium ">Password</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="bg-white rounded-[20px] rounded-tl-none p-5">
            <RadioGroup
              defaultValue="option-one"
              className="flex w-full gap-x-10 pb-3 "
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label
                  htmlFor="option-one"
                  className="mb-0 text-text text-base "
                >
                  Full property
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label
                  htmlFor="option-two"
                  className="mb-0 text-text text-base "
                >
                  Yard Only
                </Label>
              </div>
            </RadioGroup>
            <div className="flex flex-wrap py-3 border-br border-[1px] rounded-3xl items-center">
              <Select>
                <SelectTrigger className=" w-[calc(31%)] px-7  border-br rounded-none border-r-[1px] text-base text-text font-medium">
                  <SelectValue placeholder="Search Destinations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">I&apos;m Flexible</SelectItem>
                  <SelectItem value="dark">United States</SelectItem>
                  <SelectItem value="system">Italy</SelectItem>
                </SelectContent>
              </Select>
              <DateRangePicker />
              <Page />
            </div>
          </TabsContent>
          <TabsContent value="password" className="bg-white rounded-[20px] rounded-tl-none p-5">
            <RadioGroup
              defaultValue="option-one"
              className="flex w-full gap-x-10 pb-3 "
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label
                  htmlFor="option-one"
                  className="mb-0 text-text text-base "
                >
                  Full property
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label
                  htmlFor="option-two"
                  className="mb-0 text-text text-base "
                >
                  Yard Only
                </Label>
              </div>
            </RadioGroup>
            <div className="flex flex-wrap py-3 border-br border-[1px] rounded-3xl items-center">
              <Select>
                <SelectTrigger className=" w-[calc(31%)] px-7  border-br rounded-none border-r-[1px] text-base text-text font-medium">
                  <SelectValue placeholder="Search Destinations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">I&apos;m Flexible</SelectItem>
                  <SelectItem value="dark">United States</SelectItem>
                  <SelectItem value="system">Italy</SelectItem>
                </SelectContent>
              </Select>
              <DateRangePicker />
              <Page />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
