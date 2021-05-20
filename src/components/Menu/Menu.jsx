import styles from './Menu.module.css';
import { NavLink } from "react-router-dom";
import classNames from 'classnames';
import avatar from '../../assets/images/girl.jpg';

const Menu = ({
  isMenuOpen,
  toggleMenu,
}) => {
  const menuClasses = classNames(styles.menu, {[styles.opened]: isMenuOpen});

  return (
    <div className={menuClasses}>
      <div className={styles.menu__wrapper}>
        <div className={styles.userInfo}>
          <img className={styles.userInfo__avatar} src={avatar} alt='Avatar' />
          <div>Переходченко Ирина</div>
          <div>
            <a
              href="mailto:tamarova.irina@gmail.com"
              className={styles.userInfo__email}>tamarova.irina@gmail.com
            </a>
          </div>
        </div>
        <nav className={styles.nav}>
          <NavLink
            exact to='/'
            onClick={toggleMenu}
            className={styles.nav__link}
            activeClassName={styles.active}>Галерея
          </NavLink>
          <NavLink
            to='/aboutMe'
            onClick={toggleMenu}
            className={styles.nav__link}
            activeClassName={styles.active}>Обо мне
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
