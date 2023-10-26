import React from 'react';
import ContentLoader from 'react-content-loader';

const PlantPlaceholder = (props: any) => (
  <ContentLoader
    speed={2}
    viewBox='0 0 100 100'
    backgroundColor='#f3f3f3'
    foregroundColor='#cef0cc'
    {...props}
  >
    <circle cx='50' cy='50' r='50' />
  </ContentLoader>
);

export default PlantPlaceholder;
