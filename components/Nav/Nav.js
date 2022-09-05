import s from "./Nav.module.scss";
import ButtonRounded from "../Buttons/ButtonRounded/ButtonRounded";
import Logo from "../Icons/Logo";
import Hamburger from "../Icons/Hamburger/Hamburger";
import { useSelector } from "react-redux";

const Nav = () => {
  const { toggle } = useSelector((store) => store.nav);
  const showMobileMenu = toggle ?  '' : s.none;
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={`${s.wrapper} ${showMobileMenu}`}>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <ul>
          <li>Login</li>
          <ButtonRounded nameIn={"Sign Up"} />
        </ul>
      </div>
      <div className={s.hamburger}>
        <Hamburger />
      </div>
    </div>
  );
};

export default Nav;
