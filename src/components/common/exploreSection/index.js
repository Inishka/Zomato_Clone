import React from 'react'
import './exploresection.css';
import ExploreCard from './exploreCard';

const ExploreSection = ({List, collectionName}) => {
  return (
    <div className='max-width explore-section'>
      <div className='collection-tile'>{collectionName}</div>
      <div className='explore-grid'>
        {List.map((restaurant) => {
          return <ExploreCard restaurant={restaurant}/>
        })}
      </div>
    </div>
  );
};

export default ExploreSection;