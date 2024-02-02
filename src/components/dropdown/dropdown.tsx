import { useEffect, useRef, useState } from "react";
import ArrowDown from "../../assets/icon-arrow-down.svg";

enum Font {
  SansSerif = "Sans Serif",
  Serif = "Serif",
  Mono = "Mono",
}

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [font, setFont] = useState(Font.SansSerif);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const fontStyle =
    font === Font.SansSerif
      ? "font-sans"
      : font === Font.Serif
      ? "font-serif"
      : "font-mono";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="cursor-pointer" ref={dropdownRef}>
      <div
        className="flex items-center justify-between w-28"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <p className={`font-bold ${fontStyle} text-lg`}>{font}</p>
        <img src={ArrowDown} alt="arrow down" />
      </div>
      {isOpen && (
        <ul className="absolute bg-white rounded-lg shadow-md p-5 w-44">
          <li
            className="font-bold font-sans text-lg p-1 dropdown-item"
            onClick={() => {
              setFont(Font.SansSerif);
              setIsOpen(false);
            }}
          >
            Sans Serif
          </li>
          <li
            className="font-bold font-serif text-lg p-1 dropdown-item"
            onClick={() => {
              setFont(Font.Serif);
              setIsOpen(false);
            }}
          >
            Serif
          </li>
          <li
            className="font-bold font-mono text-lg p-1 dropdown-item"
            onClick={() => {
              setFont(Font.Mono);
              setIsOpen(false);
            }}
          >
            Mono
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
