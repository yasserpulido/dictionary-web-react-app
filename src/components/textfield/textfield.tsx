import { useState } from "react";

import search from "../../assets/icon-search.svg";

type TextFieldProps = {
  warning?: boolean;
};

const TextField = ({ warning = false, ...props }: TextFieldProps) => {
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
        className="flex items-center justify-between w-96 h-16 rounded-2xl py-5 px-6"
      >
        <input
          type="text"
          className="border-none w-full"
          placeholder="Search for any word..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        <img src={search} alt="search" />
      </div>
      {warning && <p className="btn-warning">Whoops, can’t be empty...</p>}
    </div>
  );
};

export default TextField;
