const getPhotos = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/photos?_start=0&_end=24'
  );

  if(response.ok) {
    return await response.json();
  }
};

export default getPhotos;
