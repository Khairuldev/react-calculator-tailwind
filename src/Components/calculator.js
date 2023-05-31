import React, { useEffect, useState } from "react";
import Button from "./button";

function Calculator() {
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [displayNumber, setDisplayNumber] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    showNumber();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstNumber, secondNumber]);

  const showNumber = () => {
    if (result) {
      setDisplayNumber(result);
    } else if (!operator) {
      setDisplayNumber(firstNumber);
    } else {
      setDisplayNumber(secondNumber);
    }
  };

  const handleNumber = (val) => {
    setResult(null);
    if (!firstNumber && !operator) {
      setFirstNumber(val.toString());
    } else if (firstNumber && !operator) {
      setFirstNumber(firstNumber + `${val}`);
    } else if (!secondNumber) {
      setSecondNumber(val.toString());
    } else {
      setSecondNumber(secondNumber + `${val}`);
    }
  };
  const handleOprator = (val) => {
    if (result) {
      setFirstNumber(result);
      setOperator(val);
    }

    if (firstNumber) {
      setOperator(val);
    }
  };

  const handleClear = () => {
    setFirstNumber(null);
    setSecondNumber(null);
    setOperator(null);
    setDisplayNumber(0);
  };

  const handleResult = () => {
    let tempResult;
    switch (operator) {
      case "+":
        tempResult = parseFloat(firstNumber) + parseFloat(secondNumber);
        setResult(tempResult.toString());
        handleClear();
        break;

      case "-":
        tempResult = parseFloat(firstNumber) - parseFloat(secondNumber);
        setResult(tempResult.toString());
        handleClear();
        break;

      case "x":
        tempResult = parseFloat(firstNumber) * parseFloat(secondNumber);
        setResult(tempResult.toString());
        handleClear();
        break;

      case "/":
        tempResult = parseFloat(firstNumber) / parseFloat(secondNumber);
        setResult(tempResult.toString());
        handleClear();
        break;

      case "%":
        tempResult = parseFloat(firstNumber) % parseFloat(secondNumber);
        setResult(tempResult.toString());
        handleClear();
        break;

      default:
        break;
    }
  };
  return (
    <div className="w-[300px] h-[540px] bg-slate-600 rounded-2xl border-4 p-2 ">
      <h1 className="text-center text-2xl py-1 text-white font-extrabold uppercase font-serif">
        Calculator
      </h1>
      <div className="w-[auto] h-[90px] bg-blue-300 flex items-center justify-end text-end m-auto  pr-1 rounded-md mb-5  ">
        <span className="text-3xl">{displayNumber ? displayNumber : 0}</span>
      </div>

      <div className="flex flex-row flex-wrap h-[300px]">
        {/* First Row */}

        <Button val={"C"} grow={true} clickAction={handleClear} />
        <Button clickAction={handleOprator} val={"-/+"} oprator={true} />
        <Button clickAction={handleOprator} val={"%"} oprator={true} />

        <Button clickAction={handleNumber} val={1} />
        <Button clickAction={handleNumber} val={2} />
        <Button clickAction={handleNumber} val={3} />
        <Button clickAction={handleOprator} val={"+"} oprator={true} />

        {/* Second row  */}
        <Button clickAction={handleNumber} val={4} />
        <Button clickAction={handleNumber} val={5} />
        <Button clickAction={handleNumber} val={6} />
        <Button clickAction={handleOprator} val={"-"} oprator={true} />

        {/* Third row  */}
        <Button clickAction={handleNumber} val={7} />
        <Button clickAction={handleNumber} val={8} />
        <Button clickAction={handleNumber} val={9} />
        <Button clickAction={handleOprator} val={"x"} oprator={true} />

        {/* Four row  */}
        <Button clickAction={handleNumber} val={0} grow={true} />
        <Button clickAction={handleOprator} val={"/"} oprator={true} />

        {/* Five row  */}

        <Button
          val={"="}
          grow={true}
          oprator={true}
          clickAction={handleResult}
        />
        <Button clickAction={handleOprator} val={"."} oprator={true} />
      </div>

      {/* end row  */}
    </div>
  );
}

export default Calculator;
