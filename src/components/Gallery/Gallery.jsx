import styles from './Gallery.module.css';
import Category from '../Category/Category';
import PageHeader from '../../components/PageHeader/PageHeader';

const Gallery = ({
  categories,
}) => (
  <>
    <PageHeader>Галерея</PageHeader>
    <div className={styles.gallery}>
      {
        categories.map(c =>
          <Category
            key={c.category}
            name={c.category}
            photos={c.photos}
          />)
      }
    </div>
  </>

);

export default Gallery;
