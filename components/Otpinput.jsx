import React, { useRef, useEffect, useState } from "react";

function OTPInput() {
  const inputs = useRef([]);
  const [values, setValues] = useState(Array(6).fill(""));

  const handleInput = (value, index) => {
    console.log(index, values);
    let newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };
  const focusInput = (inputIndex, isBackspace) => {
    if (inputs.current[inputIndex]) {
      if (isBackspace) {
        handleInput("", inputIndex + 1);
      }
      inputs.current[inputIndex].focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace") {
      setTimeout(() => {
        focusInput(index - 1, true);
      }, 100);
    } else if (
      (event.keyCode > 47 && event.keyCode < 58) ||
      (event.keyCode > 64 && event.keyCode < 91)
    ) {
      setTimeout(() => {
        focusInput(index + 1, false);
      }, 100);
    }
  };

  useEffect(() => {
    focusInput(0);
  }, []);

  return (
    <div className="flex flex-row items-center justify-between mx-auto w-full ">
      {values.map((_, index) => (
        <div className="w-16 h-16 ">
          <input
            key={index}
            className=" w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-gray-800 text-lg focus:ring-1 ring-red-600"
            id={`otp-${index}`}
            type="text"
            maxLength="1"
            ref={(ref) => (inputs.current[index] = ref)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            value={values[index]}
            onChange={(e) => handleInput(e.target.value, index)}
          />
        </div>
      ))}
    </div>
  );
}

export default OTPInput;
