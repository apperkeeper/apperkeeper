import React, { useEffect } from 'react';
import Cards from './Cards';

const AllCards = React.memo(({ apps }) => {
  useEffect(() => {}, [apps]);
  return apps.map((app, index) => (
    <Cards key={app.id} app={app} index={index} />
  ));
});

export default AllCards;
