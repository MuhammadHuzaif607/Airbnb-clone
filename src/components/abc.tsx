'use client';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { useState } from 'react';
import { Button } from './ui/button';

export default function Page() {
  const [data, setData] = useState({
    Adults: 0,
    Children: 0,
    Infants: 0,
    Pets: 0,
  });
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="top-content">
          <h6>Who</h6>
          <p id="summary">
            <p>
              Adults {data.Adults}, Childrens {data.Children}, Infant{' '}
              {data.Infants}, Pets {data.Pets}
            </p>
          </p>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="down-content">
          <div className="custom-number">
            <div className="two-main-content">
              <div className="content">
                <h6>Adults</h6>
                <p>Ages 13 or above</p>
              </div>
            </div>

            <div className="two-main-content">
              <div className="content">
                <h6>Children</h6>
                <p>Ages 13 or below</p>
              </div>
              <div className="number">
                <Button
                  onClick={() => {
                    setData((prevData) => {
                      return {
                        ...prevData,
                        Adults: data.Adults + 1,
                      };
                    });
                  }}
                >
                  +
                </Button>
                <p>{data.Adults}</p>
                <Button
                  onClick={() => {
                    setData((prevData) => {
                      if (data.Adults > 0) {
                        return {
                          ...prevData,
                          Adults: data.Adults - 1,
                        };
                      }
                      return {
                        ...prevData,
                      };
                    });
                  }}
                >
                  -
                </Button>
              </div>
            </div>

            <div className="two-main-content">
              <div className="content">
                <h6>Infants</h6>
                <p>Ages 13 or above</p>
              </div>
            </div>

            <div className="two-main-content">
              <div className="content">
                <h6>Pets</h6>
                <p>Bringing a service animal?</p>
              </div>
              <div className="number">
                <span></span>
                <input type="text" name="pets" value="0"></input>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
