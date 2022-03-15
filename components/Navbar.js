import { ActiveLink } from "./ActiveLink";
import styles from "../components/Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbarlinks}>
      <ActiveLink text="Home" href="/" />
      <ActiveLink text="Contact" href="/contact" />
      <ActiveLink text="About" href="/about" />
    </nav>
  );
};
