'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ImageUploader from '@/components/Image_uploader';

function Page() {
  const form = useForm();
  const { watch, setValue } = form;
  const [interest, language, sport] = watch(['interest', 'language', 'sport']);

  const [interests, setInterests] = useState<string[]>([]);

  function onSubmit(values: any) {
    console.log(interest, language, sport, values);
  }

  const addInterest = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInterests((prev) => {
      return [...prev, interest];
    });
    setValue('interest', '');
  };
  const removeInterest = (index: number) => {
    setInterests((prev) => prev.filter((_, i) => i !== index));
    console.log(`Interest at index ${index} removed`);
  };
  return (
    <section className="py-[70px]">
      <div className="px-3">
        <h2 className="text-text text-4xl font-medium pb-7">Profile</h2>
      </div>
      <div className="flex flex-wrap">
        <div className="w-1/4">
          <ImageUploader />
        </div>
        <div className="w-3/4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Location" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write something fun and punchy"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="interest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Interest</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Type your interesting here"
                        {...field}
                      ></Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {interests && interests.length > 0
                ? interests.map((interest, index) => {
                    return (
                      <div key={index}>
                        {interest} <X onClick={() => removeInterest(index)} />
                      </div>
                    );
                  })
                : ''}
              <Button onClick={addInterest}>Add Interest</Button>
              <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Languages</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Type your languages here"
                        {...field}
                      ></Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sport"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sports</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Type your sports here"
                        {...field}
                      ></Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default Page;
