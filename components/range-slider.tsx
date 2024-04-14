import React, { useState } from "react";
import Slider from "react-slider";

const MIN = 2;
const MAX = 7500;

export default function RangeSlider() {
  const [values, setValues] = useState<number[]>([MIN, MAX]);
  const [startValue, setStartValue] = useState<number>(MIN);
  const [endValue, setEndValue] = useState<number>(MAX);

  return (
    <div>
      <Slider
        className="w-auto max-w-lg mt-3"
        onChange={(newValues: number[]) => {
          const [newStartValue, newEndValue] = newValues;
          setValues(newValues);
          setStartValue(newStartValue);
          setEndValue(newEndValue);
        }}
        value={values}
        min={MIN}
        max={MAX}
        renderTrack={({ key, ...props }: any, state: any) => {
          const trackStyle = props.className.includes('track-1') ? { backgroundColor: '#C74211' } : { backgroundColor: '#969494' };
          return (
            <div
              key={key}
              {...props}
              style={{
                ...props.style,
                ...trackStyle,
                height: '6px',
                borderRadius: '5px',
              }}
            />
          );
        }}
        renderThumb={({ key, ...props }: any) => (
          <div
            key={key}
            {...props}
            style={{
              ...props.style,
              top: "-6px",
              height: "17px",
              width: "17px",
              borderRadius: "50%",
              backgroundColor: "white",
              border: "4px solid #E2521A",
              outline: "none",
            }}
          />
        )}
      />
      <div className="flex w-full justify-between pt-5 text-[#514D4D] font-semibold">
        <p>R$ {startValue}</p>
        <p>R$ {endValue}</p>
      </div>
    </div>
  );
}