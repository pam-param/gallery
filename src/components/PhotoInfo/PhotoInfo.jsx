import PageHeader from '../../components/PageHeader/PageHeader';
import styles from './PhotoInfo.module.css';

const PhotoInfo = ({
  title,
  id,
  url,
}) => {
  return (
    <div className={styles.photoInfo}>
      <PageHeader>Информация об изображении</PageHeader>
      <div className={styles.photoInfo__item}>
        <span className={styles.photoInfo__item__name}>Заголовок: </span>
        <span>{title}</span>
      </div>
      <div className={styles.photoInfo__item}>
        <span className={styles.photoInfo__item__name}>Идентификатор: </span>
        <span>{id}</span>
      </div>
      <div className={styles.photoInfo__item}>
        <span className={styles.photoInfo__item__name}>Ссылка: </span>
        <a href={url}>{url}</a>
      </div>
    </div>
  );
};

export default PhotoInfo;
