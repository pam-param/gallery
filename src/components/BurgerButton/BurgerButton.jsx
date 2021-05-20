import styles from './BurgerButton.module.css';
import classNames from 'classnames';

const BurgerButton = ({
  isMenuOpen,
  toggleMenu,
}) => {
  const buttonClasses = classNames(styles.burgerButton, {[styles.active]: isMenuOpen});

  return (
    <button className={buttonClasses} onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
};

export default BurgerButton;
