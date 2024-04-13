import React, { useState } from "react";
import Slider from "react-slider";

const MIN = 0;
const MAX = 12000000;

export default function RangeSlider() {
  const [values, setValues] = useState<number[]>([MIN, MAX]);
  const [startValue, setStartValue] = useState<number>(MIN);
  const [endValue, setEndValue] = useState<number>(MAX);
  
  return (
    <div>
      <Slider
        className="w-[45rem] max-w-lg bg-slate-500 mt-3"
        onChange={(newValues: number[]) => {
          const [newStartValue, newEndValue] = newValues;
          setValues(newValues);
          setStartValue(newStartValue);
          setEndValue(newEndValue);
        }}
        value={values}
        min={MIN}
        max={MAX}
        renderTrack={(props: any, state: any) => (
          <div
            {...props}
            style={{
              ...props.style,
              backgroundColor: "#D3DEE8",
              height: "2px",
            }}
          />
        )}
        renderThumb={(props: any) => (
          <div
            {...props}
            style={{
              ...props.style,
              top:"-7px",
              height: "15px",
              width: "15px",
              borderRadius:"50%",
              backgroundColor: "#C4C4C4",
            }}
          />
        )}
      />
      <div className="flex w-full justify-between pt-5 text-gray-400">
        <p>{startValue} Kr.</p>
        <p>{endValue} Kr.</p>
      </div>
    </div>
  );
}