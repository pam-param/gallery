import { withRouter } from "react-router";
import PhotoInfo from "../PhotoInfo/PhotoInfo";
import Preloader from "../Preloader/Preloader";
import NotFound from '../NotFound/NotFound';

const PhotoInfoContainer = (props) => {
  const photo = props.photos.find((p) => String(p.id) === props.match.params.id );

  if(!photo) {
    return <NotFound />;
  }

  if (!props.isLoaded) {
    return <Preloader />;
  } else {
    return <PhotoInfo id={photo.id} title={photo.title} url={photo.url} />;
  }
};


export default withRouter(PhotoInfoContainer);
