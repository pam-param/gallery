import { Route, Switch } from 'react-router-dom';
import GalleryContainer from '../GalleryContainer/GalleryContainer';
import AboutMe from '../AboutMe/AboutMe';
import PhotoInfoContainer from '../PhotoInfoContainer/PhotoInfoContainer';
import { useEffect, useState } from 'react';
import getPhotos from '../../api/api';
import styles from './Main.module.css';
import NotFound from '../NotFound/NotFound';

const Main = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getPhotos().then(result => {
      setPhotos(result);
      setTimeout(() => {
        setIsLoaded(true);
      }, 500);
    });
  }, []);

  return (
    <main className={styles.main}>
    <Switch>
      <Route
        exact
        path='/'
        render={() => <GalleryContainer photos={photos} isLoaded={isLoaded} />} />
      <Route
        path='/aboutMe'
        component={AboutMe} />
      <Route
        path='/:id'
        render={() => <PhotoInfoContainer photos={photos} isLoaded={isLoaded} />}
      />
      <Route component={NotFound} />
    </Switch>
  </main>
  );
};

export default Main;
