import { Dropdown } from "..";
import Logo from "../../assets/logo.svg";
import { useTheme } from "../../hooks";

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark-mode";

  return (
    <header className="flex items-center justify-between">
      <img src={Logo} alt="logo" />
      <nav>
        <ul className="flex items-center justify-between divide-x divide-gray-200 h-8">
          <li className="mb-0 h-full mr-6">
            <Dropdown />
          </li>
          <li className="flex items-center justify-between h-full">
            <label className="switch ml-6">
              <input
                type="checkbox"
                defaultChecked={isDarkMode}
                onClick={toggleTheme}
              />
              <span className="slider round"></span>
            </label>
            <div
              className={`ml-5 ${isDarkMode ? "icon-moon" : null}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
              >
                <path
                  fill="none"
                  stroke="#838383"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
                />
              </svg>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
