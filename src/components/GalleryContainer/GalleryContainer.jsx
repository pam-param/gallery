import Gallery from '../Gallery/Gallery';
import Preloader from '../Preloader/Preloader';
import { categorize } from '../../helpers/helpers'

const GalleryContainer = ({
  photos,
  isLoaded,
}) => {
  if (!isLoaded) {
    return <Preloader />;
  } else {
    return <Gallery categories={categorize(photos)} />;
  }
}

export default GalleryContainer;
