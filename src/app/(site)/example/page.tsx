'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { z } from 'zod';
import { FormDataSchema } from '@/Schemas/FormData';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { steps } from './steps';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type Inputs = z.infer<typeof FormDataSchema>;

export default function Form() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentSubStep, setCurrentSubStep] = useState(0);
  const [guestsPricesInfo, setGuestPricesInfo] = useState([
    {
      From: 1,
      To: 5,
      Price: 20,
    },
  ]);
  const [editValues, setEditValues] = useState({ name: '', username: '' });
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  const lease_property = watch('lease_property');

  type FieldName = keyof Inputs;

  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  const lastSubStepForStep = (step: number) => {
    // Define the number of substeps for each main step
    const subStepsForEachStep = {
      0: 6, // Step 0 has 2 substeps (0, 1)
      1: 3, // Step 1 has 3 substeps (0, 1, 2)
      2: 1, // Step 2 has 1 substep (0)
      3: 0, // Step 3 has no substeps
      // Add more steps as needed
      // You can continue adding steps up to the maximum number of steps you have
    };

    // Return the number of substeps for the given step, or 0 if the step is not found
    return subStepsForEachStep[step] || 0;
  };

  // Logic for handling next and previous steps
  const next = async () => {
    const fields = steps[currentStep].substeps[currentSubStep].fields;

    const output = await trigger(fields as FieldName[], { shouldFocus: true });
    console.log(fields, output);
    if (!output) return;

    if (
      currentStep === steps.length - 1 &&
      currentSubStep === steps[currentStep].substeps.length - 1
    ) {
      // Last step, last substep: Submit the form
      await handleSubmit(processForm)();
    } else if (currentSubStep < steps[currentStep].substeps.length - 1) {
      // Move to the next substep within the same step
      setCurrentSubStep(currentSubStep + 1);
    } else {
      // Move to the next step and reset the substep
      setCurrentStep(currentStep + 1);
      setCurrentSubStep(0);
      setPreviousStep(currentStep);
    }
  };

  const prev = () => {
    if (currentSubStep > 0) {
      // Go back within the substeps
      setCurrentSubStep((prevSubStep) => prevSubStep - 1);
    } else if (currentStep > 0) {
      // Go to the previous main step if there are no substeps left
      setPreviousStep(currentStep); // Set the current step as the previous step
      setCurrentStep((prevStep) => prevStep - 1);

      // Reset substep to the last substep of the previous step
      const lastSubStep = lastSubStepForStep(currentStep - 1);
      setCurrentSubStep(lastSubStep);
    }
  };

  const handleSaveChanges = () => {
    // Here you can handle the submission logic
    console.log('Saved values:', editValues);

    // Optionally, update the state for guestsPricesInfo if needed
    // setGuestsPricesInfo(updatedPrices); // Update your state here

    setDialogOpen(false);
  };

  const handleEditClick = (index: number) => {
    setEditValues({
      name: 'Pedro Duarte', // You can set this to the existing value
      username: '@peduarte', // You can set this to the existing value
    });
    setCurrentIndex(index);
    setDialogOpen(true);
  };

  return (
    <section className=" inset-0 flex flex-col justify-between p-24">
      {/* steps */}
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
          {steps.map((step, index) => (
            <li key={step.name} className="md:flex-1">
              {currentStep > index ? (
                <div className="group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-sky-600 transition-colors ">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className="flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                  aria-current="step"
                >
                  <span className="text-sm font-medium text-sky-600">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : (
                <div className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-gray-500 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Form */}
      <form className="mt-12 py-12" onSubmit={handleSubmit(processForm)}>
        {/* {currentStep === 0 && (
          <motion.div
            initial={{ x: '-50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {currentSubStep === 0 && (
              <div className="sm:col-span-3">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Location
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="location"
                    {...register('location')}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.location?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.location.message}
                    </p>
                  )}
                </div>
              </div>
            )}
            {currentSubStep === 1 && (
              <>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Country
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="country"
                      {...register('country')}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    />
                    {errors.country?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.country.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="street_address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Street Address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="street_address"
                      {...register('street_address')}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    />
                    {errors.street_address?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.street_address.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="appartment"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Apartment or Suite (Optional)
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="apartment_suite"
                      {...register('apartment_suite')}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="city"
                      {...register('city')}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    />
                    {errors.city?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.city.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    State
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="state"
                      {...register('state')}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    />
                    {errors.state?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.state.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="zip_code"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Zip Code
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="zip_code"
                      {...register('zip_code')}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    />
                    {errors.zip_code?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.zip_code.message}
                      </p>
                    )}
                  </div>
                </div>
              </>
            )}
            {currentSubStep === 2 && (
              <div className="sm:col-span-3">
                <div>
                  <input
                    type="radio"
                    id="Home_Spaces"
                    {...register('listing')}
                    name="listing"
                    value="Home_Spaces"
                  ></input>
                  <label htmlFor="Home_Spaces">Home Spaces</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="Pool"
                    {...register('listing')}
                    name="listing"
                    value="Pool"
                  ></input>
                  <label htmlFor="Pool">Pool</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="Sports_court"
                    {...register('listing')}
                    name="listing"
                    value="Sports_court"
                  ></input>
                  <label htmlFor="Sports_court">Sports Court</label>
                </div>
                <div>
                  <input
                    type="radio"
                    {...register('listing')}
                    id="Horses"
                    name="listing"
                    value="Horses"
                  ></input>
                  <label htmlFor="Horses">Horses</label>
                </div>
                {errors.listing?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.listing.message}
                  </p>
                )}
              </div>
            )}
            {currentSubStep === 3 && (
              <div className="sm:col-span-3">
                <div>
                  <input
                    type="radio"
                    id="Tennis_court"
                    {...register('listing_subcategory')}
                    name="listing_subcategory"
                    value="Tennis_court"
                  ></input>
                  <label htmlFor="Tennis_court">Tennis Court</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="Pickleball_court"
                    {...register('listing_subcategory')}
                    name="listing_subcategory"
                    value="Pickleball_court"
                  ></input>
                  <label htmlFor="Pickleball_court">Pickleball court</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="Basketball_court"
                    {...register('listing_subcategory')}
                    name="listing_subcategory"
                    value="Basketball_court"
                  ></input>
                  <label htmlFor="Basketball_court">Basketball Court</label>
                </div>
                <div>
                  <input
                    type="radio"
                    {...register('listing_subcategory')}
                    id="Volleyball_court"
                    name="listing_subcategory"
                    value="Volleyball_court"
                  ></input>
                  <label htmlFor="Volleyball_court">Volleyball court</label>
                </div>
                {errors.listing_subcategory?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.listing_subcategory.message}
                  </p>
                )}
              </div>
            )}
            {currentSubStep === 4 && (
              <div className="sm:col-span-3">
                <div>
                  <label htmlFor="space_type_desc">Space Type:</label>
                  <textarea
                    {...register('space_type_desc')}
                    id="space_type_desc"
                    name="space_type_desc"
                    placeholder="Describe your space type"
                  ></textarea>
                  {errors.space_type_desc?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.space_type_desc.message}
                    </p>
                  )}
                </div>
                <h5>What&apos;s Your yard size</h5>
                <div>
                  <label htmlFor="yard_width">Width </label>
                  <input
                    {...register('yard_width')}
                    type="number"
                    id="yard_width"
                    name="yard_width"
                    placeholder="Enter yard width"
                  ></input>
                  {errors.yard_width?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.yard_width.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="yard_length">Length </label>
                  <input
                    {...register('yard_length')}
                    type="number"
                    id="yard_length"
                    name="yard_length"
                    placeholder="Enter yard width"
                  ></input>
                  {errors.yard_length?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.yard_length.message}
                    </p>
                  )}
                </div>
              </div>
            )}

            {currentSubStep === 5 && (
              <div>
                <h3>Full Property</h3>
                <div>
                  <label htmlFor="bedrooms">Bedrooms</label>
                  <input type="number" {...register('bedrooms')}></input>
                  {errors.bedrooms?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.bedrooms.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="bathrooms">Bedrooms</label>
                  <input type="number" {...register('bathrooms')}></input>
                  {errors.bathrooms?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.bathrooms.message}
                    </p>
                  )}
                </div>

                <h5>Popular amenities</h5>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="fixed_net"
                      {...register('popular_amenities')}
                    />
                    Fixed Net
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="temporary_net"
                      {...register('popular_amenities')}
                    />
                    Temporary Net
                  </label>
                </div>
                {errors.popular_amenities?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.popular_amenities.message}
                  </p>
                )}
                <h5>Amenities bathroom</h5>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="night_lighting"
                      {...register('bathroom_amenities')}
                    />
                    Night Lighting
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="shaded_area"
                      {...register('bathroom_amenities')}
                    />
                    Shaded Area
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="sitting_area"
                      {...register('bathroom_amenities')}
                    />
                    Sitting Area
                  </label>
                </div>
                {errors.bathroom_amenities?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.bathroom_amenities.message}
                  </p>
                )}
                <h5>Kitchen Amenities</h5>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="towels"
                      {...register('kitchen_amenities')}
                    />
                    Towels
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="rackets"
                      {...register('kitchen_amenities')}
                    />
                    Rackets
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="water"
                      {...register('kitchen_amenities')}
                    />
                    Water
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="instructor"
                      {...register('kitchen_amenities')}
                    />
                    Instructor
                  </label>
                </div>
                {errors.kitchen_amenities?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.kitchen_amenities.message}
                  </p>
                )}
                <h5>Laundry</h5>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="shower"
                      {...register('laundry')}
                    />
                    Shower
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="speaker"
                      {...register('laundry')}
                    />
                    Speaker
                  </label>
                </div>
                {errors.laundry?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.laundry.message}
                  </p>
                )}
                <h5>Standout Amenities</h5>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="pools"
                      {...register('standout_amenities')}
                    />
                    Pools
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="patio"
                      {...register('standout_amenities')}
                    />
                    Patio
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="grill"
                      {...register('standout_amenities')}
                    />
                    Grill
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="hot_tub"
                      {...register('standout_amenities')}
                    />
                    Hot Tub
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="bar"
                      {...register('standout_amenities')}
                    />
                    Bar
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="lake_access"
                      {...register('standout_amenities')}
                    />
                    Lake Access
                  </label>
                </div>
                {errors.standout_amenities?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.standout_amenities.message}
                  </p>
                )}
                <h5>Parking Space</h5>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="No-parking"
                      {...register('parking_space')}
                    />
                    No Parking
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="1"
                      {...register('parking_space')}
                    />
                    1
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="2"
                      {...register('parking_space')}
                    />
                    2
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="3"
                      {...register('parking_space')}
                    />
                    3
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="4"
                      {...register('parking_space')}
                    />
                    4
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="5"
                      {...register('parking_space')}
                    />
                    5
                  </label>
                </div>
                {errors.parking_space?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.parking_space.message}
                  </p>
                )}
              </div>
            )}
            {currentSubStep === 6 && (
              <>
                <div>
                  <h5>General Limitations (Optional)</h5>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="no_smoke"
                        {...register('limitations')}
                      />
                      No Smoke
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="no_bike"
                        {...register('limitations')}
                      />
                      No Bike
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="no_loud_music"
                        {...register('limitations')}
                      />
                      No Loud Music
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="no_own_food"
                        {...register('limitations')}
                      />
                      No Own Food
                    </label>
                  </div>
                  {errors.limitations?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.limitations.message}
                    </p>
                  )}
                  <h5>Kids (optional)</h5>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="0-3"
                        {...register('kids')}
                      />
                      0-3
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="0-12"
                        {...register('kids')}
                      />
                      0-12
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="0-16"
                        {...register('kids')}
                      />
                      0-16
                    </label>
                  </div>
                  {errors.kids?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.kids.message}
                    </p>
                  )}
                  <h5>Pets (optional)</h5>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="small"
                        {...register('pets')}
                      />
                      Small
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="medium"
                        {...register('pets')}
                      />
                      Medium
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="big"
                        {...register('pets')}
                      />
                      Big
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="all_dog_breds"
                        {...register('pets')}
                      />
                      All Dog Breeds
                    </label>
                  </div>
                  {errors.pets?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.pets.message}
                    </p>
                  )}
                  <div>
                    <label>Own Rules</label>
                    <textarea
                      {...register('own_rules')}
                      placeholder="Enter your own rules"
                    />
                    {errors.own_rules?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.own_rules.message}
                    </p>
                  )}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )} */}

        {currentStep === 0 && (
          <motion.div
            initial={{ x: '-50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {currentSubStep === 0 && (
              <div>
                <label
                  htmlFor="guests"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Guests Count
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="guests"
                    {...register('guests')}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.guests?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.guests.message}
                    </p>
                  )}
                </div>
              </div>
            )}
            {currentSubStep === 1 && (
              <div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="by_day"
                      {...register('lease_property')}
                    />
                    By Day
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="by_hourly"
                      {...register('lease_property')}
                    />
                    By Hourly
                  </label>
                </div>
              </div>
            )}
            {currentSubStep === 2 && (
              <div>
                {guestsPricesInfo.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <div>
                      {item.From} - {item.To} Guests
                    </div>
                    <div>
                      ${item.Price}/
                      {lease_property === 'by_day' ? 'Daily' : 'hr'}
                    </div>

                    <>
                      <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            onClick={() => handleEditClick(index)}
                          >
                            Edit Profile
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Edit Profile</DialogTitle>
                            <DialogDescription>
                              Make changes to your profile here. Click save when
                              youre done.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="name" className="text-right">
                                Name
                              </Label>
                              <Input
                                id="name"
                                value={editValues.name}
                                onChange={(e) =>
                                  setEditValues({
                                    ...editValues,
                                    name: e.target.value,
                                  })
                                }
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="username" className="text-right">
                                Username
                              </Label>
                              <Input
                                id="username"
                                value={editValues.username}
                                onChange={(e) =>
                                  setEditValues({
                                    ...editValues,
                                    username: e.target.value,
                                  })
                                }
                                className="col-span-3"
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button type="button" onClick={handleSaveChanges}>
                              Save changes
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {currentStep === 2 && (
          <>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Complete
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Thank you for your submission.
            </p>
          </>
        )}
      </form>

      {/* Navigation */}
      <div className="mt-8 pt-5">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prev}
            disabled={currentStep === 0 && currentSubStep === 0}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            disabled={currentStep === steps.length - 1}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
