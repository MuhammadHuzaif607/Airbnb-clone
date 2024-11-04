'use client';

import React, { useState } from 'react';
// import Image from 'next/image';
// import step_1 from '@/images/step_1.png';
// import step_2 from '@/images/step_2.png';
// import step_3 from '@/images/step_3.png';
// import Map from '@/images/map.png';
import * as motion from 'framer-motion/client';
import { Input } from '@/components/ui/input';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowLeft } from 'lucide-react';
import { SubmitPropertySchema } from '@/Schemas/SubmitPropertySchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

function Page() {
  const steps = [
    {
      id: 'Step 1',
      name: 'Share The Basics',
      substeps: [
        { name: 'What is Your Location', fields: ['location'] },
        {
          name: 'Is the pin in the right Spot',
          fields: [
            'country',
            'street_address',
            'appartment_suite',
            'city',
            'state',
            'zip_code',
          ],
        },
        { name: 'What are your Listings' },
        { name: 'Listings SubCategory' },
        { name: 'Share Some basics about your place' },
        { name: 'Tell guests what your place has to offer' },
        { name: 'Limitation' },
      ],
    },
    {
      id: 'Step 2',
      name: 'Guests & Prices',
      substeps: [
        { name: 'What is Your Location' },
        { name: 'Is the pin in the right Spot' },
        { name: 'What are your Listings' },
        { name: 'Listings SubCategory' },
        { name: 'Share Some basics about your place' },
        { name: 'Tell guests what your place has to offer' },
        { name: 'Limitation' },
      ],
    },
    {
      id: 'Step 3',
      name: 'Make Your places shine',
      substeps: [],
    },
  ];
  const form = useForm({
    resolver: zodResolver(SubmitPropertySchema),
    defaultValues: {
      location: '',
      country: '',
      street_address: '',
      appartment_suite: '',
      city: '',
      state: '',
      zip_code: '',
    },
  });

  const { control, handleSubmit, trigger, reset } = form;

  type Inputs = z.infer<typeof SubmitPropertySchema>;

  type FieldName = keyof Inputs;

  const handleNextStep = async () => {
    const fields = steps[currentStep].substeps[currentSubStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });
    console.log(fields, output);

    if (!output) return;

    if (currentSubStep < steps[currentStep].substeps.length - 1) {
      setCurrentSubStep(currentSubStep + 1);
    } else {
      setCurrentStep(currentStep + 1);
      setCurrentSubStep(0);
      setPreviousStep(currentStep);
    }
  };
  const handlePrevStep = () => {
    if (currentSubStep > 0) {
      setCurrentSubStep(currentSubStep - 1);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setCurrentSubStep(steps[currentStep - 1].substeps.length - 1);
      setPreviousStep(currentStep - 1);
    }
  };

  const [currentStep, setCurrentStep] = useState(0);
  const [currentSubStep, setCurrentSubStep] = useState(0);
  const [previousStep, setPreviousStep] = useState(0);
  const delta = currentStep - previousStep;
  // <div className="flex flex-wrap items-center">
  //   <div className="w-2/5">
  //     <h1>Listing on Lucky Backyards is quick and easy!</h1>
  //     <Button>Get Started</Button>
  //   </div>
  //   <div className="w-1/5">
  //     <div className="step">
  //       <h4>Step 1</h4>
  //       <h3>Share the Basics</h3>
  //       <p>Tell us where youre located and what kind of space you own</p>
  //     </div>
  //     <div className="step">
  //       <h4>Step 1</h4>
  //       <h3>Share the Basics</h3>
  //       <p>Tell us where youre located and what kind of space you own</p>
  //     </div>
  //     <div className="step">
  //       <h4>Step 1</h4>
  //       <h3>Share the Basics</h3>
  //       <p>Tell us where youre located and what kind of space you own</p>
  //     </div>
  //   </div>
  //   <div className="w-1/5">
  //     <div className="step_img h-40 relative">
  //       <Image
  //         src={step_1}
  //         layout="fill"
  //         objectFit="contain"
  //         objectPosition="center"
  //         alt=""
  //       ></Image>
  //     </div>
  //     <div className="step_img h-40 relative">
  //       <Image
  //         src={step_2}
  //         layout="fill"
  //         objectFit="contain"
  //         objectPosition="center"
  //         alt=""
  //       ></Image>
  //     </div>
  //     <div className="step_img h-40 relative">
  //       <Image
  //         src={step_3}
  //         layout="fill"
  //         objectFit="contain"
  //         objectPosition="center"
  //         alt=""
  //       ></Image>
  //     </div>
  //   </div>
  // </div>

  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={handleSubmit(processForm)} className="space-y-8">
          {currentStep === 0 && (
            <div>
              Step1
              {currentSubStep === 0 && (
                <motion.div
                  initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="reltive w-1/2 mx-auto"
                >
                  {/* <div className="relative h-28">
                  <Image
                    src={Map}
                    fill
                    alt=""
                    className="w-full h-full"
                    objectFit="contain"
                    objectPosition="center"
                  ></Image>
                </div> */}

                  <FormField
                    control={control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>This is your Location</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              )}
              {currentSubStep === 1 && (
                <motion.div
                  initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <FormField
                    control={control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a verified email to display" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="m@example.com">
                              m@example.com
                            </SelectItem>
                            <SelectItem value="m@google.com">
                              m@google.com
                            </SelectItem>
                            <SelectItem value="m@support.com">
                              m@support.com
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="street_address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Street Address</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="appartment_suite"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>appartment_suite</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>zip_code</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>zip_code</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="zip_code"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>zip_code</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              )}
              {currentSubStep === 2 && (
                <motion.div
                  initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  SubStep 3
                </motion.div>
              )}
              {currentSubStep === 3 && <div>SubStep 3</div>}
              {currentSubStep === 4 && <div>SubStep 4</div>}
              {currentSubStep === 5 && <div>SubStep 5</div>}
              {currentSubStep === 6 && <div>SubStep 6</div>}
              <div
                className="flex justify-between items-center py-5 px-20"
                style={{ boxShadow: '0 -5px 16px 0 #0000002b' }}
              >
                <button
                  onClick={handlePrevStep}
                  className="inline-flex items-center gap-x-2"
                >
                  <ArrowLeft /> Back
                </button>
                <button
                  onClick={handleNextStep}
                  className=" text-white inline-flex rounded-[50px] duration-300 w-[165px] h-[60px] items-center justify-center px-3 py-2 gap-3 bg-main font-medium"
                >
                  Continue
                </button>
              </div>
            </div>
          )}
          {currentStep === 1 && (
            <div>
              Step2
              {currentSubStep === 0 && <div>SubStep 0</div>}
              {currentSubStep === 1 && <div>SubStep 1</div>}
              {currentSubStep === 2 && <div>SubStep 2</div>}
              {currentSubStep === 3 && <div>SubStep 3</div>}
              {currentSubStep === 4 && <div>SubStep 4</div>}
              {currentSubStep === 5 && <div>SubStep 5</div>}
              {currentSubStep === 6 && <div>SubStep 6</div>}
              <div
                className="flex justify-between items-center py-5 px-20"
                style={{ boxShadow: '0 -5px 16px 0 #0000002b' }}
              >
                <button
                  onClick={handlePrevStep}
                  className="inline-flex items-center gap-x-2"
                >
                  <ArrowLeft /> Back
                </button>
                <button
                  onClick={handleNextStep}
                  className=" text-white inline-flex rounded-[50px] duration-300 w-[165px] h-[60px] items-center justify-center px-3 py-2 gap-3 bg-main font-medium"
                >
                  Continue
                </button>
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div>
              Step3
              {currentSubStep === 0 && <div>SubStep 0</div>}
              {currentSubStep === 1 && <div>SubStep 1</div>}
              {currentSubStep === 2 && <div>SubStep 2</div>}
              {currentSubStep === 3 && <div>SubStep 3</div>}
              {currentSubStep === 4 && <div>SubStep 4</div>}
              {currentSubStep === 5 && <div>SubStep 5</div>}
              {currentSubStep === 6 && <div>SubStep 6</div>}
              <div
                className="flex justify-between items-center py-5 px-20"
                style={{ boxShadow: '0 -5px 16px 0 #0000002b' }}
              >
                <button
                  onClick={handlePrevStep}
                  className="inline-flex items-center gap-x-2"
                >
                  <ArrowLeft /> Back
                </button>
                <button
                  onClick={handleNextStep}
                  className=" text-white inline-flex rounded-[50px] duration-300 w-[165px] h-[60px] items-center justify-center px-3 py-2 gap-3 bg-main font-medium"
                >
                  Continue
                </button>
              </div>
            </div>
          )}
        </form>
      </Form>
    </>
  );
}

export default Page;
