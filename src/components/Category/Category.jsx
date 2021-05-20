import styles from './Category.module.css';
import DetailedPhoto from '../DetailedPhoto/DetailedPhoto';

const Category = ({
  name,
  photos,
}) => {
  return (
    <div className={styles.category}>
      <h3 className={styles.category__header}>Изображения {name}</h3>
      <div className={styles.category__content}>
        {
          photos.map(p =>
            <DetailedPhoto
              key={p.id}
              id={p.id}
              url={p.url}
              title={p.title}
            />)
        }
      </div>
    </div>
  )
};

export default Category;
