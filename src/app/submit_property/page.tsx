import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import step_1 from '../public/images/step_1.png';
import step_2 from '../public/images/step_2.png';
import step_3 from '../public/images/step_3.png';

function Page() {
  return (
    <div className="flex flex-wrap items-center">
      <div className="w-2/5">
        <h1>Listing on Lucky Backyards is quick and easy!</h1>
        <Button>Get Started</Button>
      </div>
      <div className="w-1/5">
        <div className="step">
          <h4>Step 1</h4>
          <h3>Share the Basics</h3>
          <p>Tell us where youre located and what kind of space you own</p>
        </div>
        <div className="step">
          <h4>Step 1</h4>
          <h3>Share the Basics</h3>
          <p>Tell us where youre located and what kind of space you own</p>
        </div>
        <div className="step">
          <h4>Step 1</h4>
          <h3>Share the Basics</h3>
          <p>Tell us where youre located and what kind of space you own</p>
        </div>
      </div>
      <div className="w-1/5">
        <div className="step_img h-40 relative">
          <Image
            src={step_1}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            alt=""
          ></Image>
        </div>
        <div className="step_img h-40 relative">
          <Image
            src={step_2}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            alt=""
          ></Image>
        </div>
        <div className="step_img h-40 relative">
          <Image
            src={step_3}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            alt=""
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Page;
