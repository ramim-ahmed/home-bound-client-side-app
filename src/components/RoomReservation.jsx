/* eslint-disable react/prop-types */
import { DateRange } from "react-date-range";
import { Button } from "./ui/button";
import { useState } from "react";

export default function RoomReservation({ room }) {
  const [state, setState] = useState([
    {
      startDate: new Date(room?.from),
      endDate: new Date(room?.to),
      key: "selection",
    },
  ]);

  return (
    <div className="bg-white p-4">
      <div className="space-y-3">
        <h3>
          <span className="font-bold">${room?.price}</span> night
        </h3>
        <hr />
        <div>
          <DateRange
            showDateDisplay={false}
            onChange={() =>
              setState([
                {
                  startDate: new Date(room?.from),
                  endDate: new Date(room?.to),
                  key: "selection",
                },
              ])
            }
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
        </div>
        <hr />
        <div>
          <Button className="w-full bg-themeColor">Revervation Now</Button>
        </div>
        <hr />
        <div className="flex font-bold justify-between items-center">
          <h1>Total</h1>
          <h1>${room?.price}</h1>
        </div>
      </div>
    </div>
  );
}
