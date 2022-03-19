import { ActiveLink } from "./ActiveLink";
import styles from "../components/Navbar.module.css";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <nav className={styles.navbarlinks}>
      {menuItems.map((item) => (
        <ActiveLink text={item.text} href={item.href} key={item.href} />
      ))}
    </nav>
  );
};
