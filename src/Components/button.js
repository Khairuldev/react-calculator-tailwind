import React from "react";

function Button({ val, clickAction, grow = false, oprator = false }) {
  return (
    <button
      onClick={() => clickAction(val)}
      className={` rounded-sm text-white text-2xl h-1/5 cursor-pointer border border-gray-900 hover:bg-green-300 ${
        grow ? `flex-[2_0_42%]` : `flex-[1_0_21%]`
      }
          ${grow && val === 0 ? `flex-[3_0_63%]` : ` flex-[1_0_21%]`}
          ${grow && val === "=" ? `flex-[3_0_63%]` : ` flex-[1_0_21%]`}
          ${oprator ? `bg-orange-400` : `bg-gray-600`}
              ${val === "C" && `bg-red-600`}`}
    >
      {val}
    </button>
  );
}

export default Button;
