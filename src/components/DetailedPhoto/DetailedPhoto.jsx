import styles from './DetailedPhoto.module.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const DetailedPhoto = ({
  id,
  url,
  title,
}) => {
  const [isHover, setIsHover] = useState(false);

  const activateIsHover = () => {
    setIsHover(true);
  }

  const deactivateIsHover = () => {
    setIsHover(false);
  }

  return (
    <div className={styles.detailedPhoto}>
      <img
        src={url}
        alt={title}
        onMouseEnter={activateIsHover}
        onMouseLeave={deactivateIsHover}
        className={styles.detailedPhoto__photo}
      />
      {
        isHover &&
        <NavLink to={`/${id}`}>
          <button
            className={styles.detailedPhoto__button}
            onMouseEnter={activateIsHover}> Подробнее
          </button>
        </NavLink>
      }
    </div>
  );
};

export default DetailedPhoto;
