import { Dropdown } from "..";
import Logo from "../../assets/logo.svg";

const Navigation = () => {
  return (
    <header className="flex items-center justify-between">
      <img src={Logo} alt="logo" />
      <nav className="flex items-center">
        <ul className="flex items-center justify-between">
          <li>
            <Dropdown />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
