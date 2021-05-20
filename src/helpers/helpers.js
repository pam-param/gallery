const PHOTOS_NUMBER = 6;

const categorize = (photos) => {
  const result = [];

  for (let i = 0; i <= photos.length - PHOTOS_NUMBER; i += PHOTOS_NUMBER) {
    result.push({
      'category': `${i + 1}-${i + PHOTOS_NUMBER}`,
      'photos': photos.slice(i, i + PHOTOS_NUMBER),
    });
  }

  return result;
};


export { categorize };
