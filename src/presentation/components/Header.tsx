import Logo from "./Logo";

import { Header as HeaderElement } from "../styles/components/Header";
import { Link } from "expo-router";

const Header = () => {
  return (
    <HeaderElement>
      <Link href="/">
        <Logo />
      </Link>
    </HeaderElement>
  );
};

export default Header;
