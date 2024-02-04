import { useState } from "react";

import search from "../../assets/icon-search.svg";
import { useFont } from "../../hooks";

type TextFieldProps = {
  warning?: boolean;
};

const TextField = ({ warning = false, ...props }: TextFieldProps) => {
  const { selectedFont } = useFont();
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = warning ? "#ff5c5c" : isFocused ? "#a445ed" : "#f4f4f4";

  return (
    <div>
      <div
        style={{
          backgroundColor: "#f4f4f4",
          border: `1px solid ${borderColor}`,
          color: "#2d2d2d",
        }}
        className="flex items-center justify-between h-16 rounded-2xl py-5 px-6"
      >
        <input
          type="text"
          name="search"
          className={`border-none w-full ${selectedFont}`}
          placeholder="Search for any word..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        <button type="submit" className="focus:outline-none">
          <img src={search} alt="search" />
        </button>
      </div>
      <p className="btn-warning h-8">
        {warning && "Whoops, can't be empty..."}
      </p>
    </div>
  );
};

export default TextField;
