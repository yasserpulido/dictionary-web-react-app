import { Dropdown } from "..";
import Logo from "../../assets/logo.svg";
import IconMoon from "../../assets/icon-moon.svg";

const Navigation = () => {
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
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <img className="ml-5" src={IconMoon} alt="moon" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
