import BurgerButton from "../BurgerButton/BurgerButton";
import Menu from "../Menu/Menu";
import styles from './Header.module.css';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { useState, useRef } from "react";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const node = useRef();

  useOnClickOutside(node, () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  });

  return (
    <header className={styles.header} ref={node}>
      <div className={styles.navbar}>
        <BurgerButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <h1>Gallery</h1>
      </div>
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
    </header>
  );
};

export default Header;
