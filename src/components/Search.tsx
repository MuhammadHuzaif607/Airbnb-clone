'use client';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Search as SearchIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { FormSchema } from '@/Schemas/SearchSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

function Search() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  function onByDaySubmit(data: z.infer<typeof FormSchema>) {
    data.mode = 'By day';
    console.log(data);
  }
  function onByHourSubmit(data: z.infer<typeof FormSchema>) {
    data.mode = 'By Hour';
    console.log(data);
  }
  return (
    <section
      style={{
        backgroundImage: `url('https://luckybackyards.com/wp-content/themes/luckybackyard/assets/images/main-title-bg.png')`,
      }}
      className="bg-no-repeat py-8 bg-cover "
    >
      <div className="max-w-screen-xl mx-auto">
        <Tabs defaultValue="Daily">
          <TabsList className="inline-flex  gap-x-4 justify-start bg-white py-3 px-4 h-auto rounded-t-2xl rounded-b-none">
            <TabsTrigger
              value="Daily"
              className="hover:bg-text group py-2 px-5  rounded-full"
            >
              <h4 className="group-hover:text-white text-base font-medium">
                Daily
              </h4>
            </TabsTrigger>
            <TabsTrigger
              value="Hourly"
              className="hover:bg-text group py-2 px-5  rounded-full"
            >
              <h4 className="group-hover:text-white text-base font-medium">
                Hourly
              </h4>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Daily" className="w-full mx-auto bg-white">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onByDaySubmit)}
                className="w-full space-y-6 flex "
              >
                <FormField
                  control={form.control}
                  name="property_type"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="full_property" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Full Property
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="yard_only" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Yard Only
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="destination"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <h5>Where</h5>
                        <p>Search Destinations</p>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Search By region" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="united_states">
                            United States
                          </SelectItem>
                          <SelectItem value="italy">Italy</SelectItem>
                          <SelectItem value="spain">Spain</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="check_in_date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Check In Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={'outline'}
                              className={cn(
                                'w-[240px] pl-3 text-left font-normal',
                                !field.value && 'text-muted-foreground'
                              )}
                            >
                              {field.value ? (
                                format(field.value, 'PPP')
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date('1900-01-01')
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="check_out_date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Check Out Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={'outline'}
                              className={cn(
                                'w-[240px] pl-3 text-left font-normal',
                                !field.value && 'text-muted-foreground'
                              )}
                            >
                              {field.value ? (
                                format(field.value, 'PPP')
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date('1900-01-01')
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="relative group">
                  <h3>Who</h3>
                  <p>Adults 0, Childrens 0, Infant 0, Pets 0</p>
                  <div className="flex justify-between absolute bottom-0 left-0 opacity-0 group-hover:opacity-100">
                    <div>
                      <h3>Adults</h3>
                      <p>Aged 13 or above</p>
                    </div>
                    <div className="flex">
                      <button>+</button>
                      <p>0</p>
                      <button>-</button>
                    </div>
                  </div>
                </div>
                <Button type="submit">
                  Submit <SearchIcon />
                </Button>
              </form>
            </Form>
          </TabsContent>
          <TabsContent value="Hourly" className="w-full mx-auto bg-white">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onByHourSubmit)}
                className="w-full space-y-6 flex "
              >
                <FormField
                  control={form.control}
                  name="property_type"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="full_property" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Full Property
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="yard_only" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Yard Only
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="destination"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <h5>Where</h5>
                        <p>Search Destinations</p>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Search By region" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="united_states">
                            United States
                          </SelectItem>
                          <SelectItem value="italy">Italy</SelectItem>
                          <SelectItem value="spain">Spain</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="check_in_date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Check In Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={'outline'}
                              className={cn(
                                'w-[240px] pl-3 text-left font-normal',
                                !field.value && 'text-muted-foreground'
                              )}
                            >
                              {field.value ? (
                                format(field.value, 'PPP')
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date('1900-01-01')
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="check_out_date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Check Out Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={'outline'}
                              className={cn(
                                'w-[240px] pl-3 text-left font-normal',
                                !field.value && 'text-muted-foreground'
                              )}
                            >
                              {field.value ? (
                                format(field.value, 'PPP')
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date('1900-01-01')
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="relative group">
                  <h3>Who</h3>
                  <p>Adults 0, Childrens 0, Infant 0, Pets 0</p>
                  <div className="flex justify-between absolute bottom-0 left-0 opacity-0 group-hover:opacity-100">
                    <div>
                      <h3>Adults</h3>
                      <p>Aged 13 or above</p>
                    </div>
                    <div className="flex">
                      <button>+</button>
                      <p>0</p>
                      <button>-</button>
                    </div>
                  </div>
                </div>
                <Button type="submit">
                  Submit <SearchIcon />
                </Button>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default Search;
