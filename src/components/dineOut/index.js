import React from 'react'
import './dineout.css';
import Collection from '../common/collections';
import Filters from '../common/filters';
import { diningOut } from '../../data/diningOut';
import ExploreSection from '../common/exploreSection';

const collectionList = [
  {
      id:2,
      title:"trending this week",
      cover:"",
      places:"12 places",
  },
  {
    id:2,
    title:"trending this week",
    cover:"",
    places:"12 places",
 },
 {
   id:2,
   title:"trending this week",
   cover:"",
   places:"12 places",
 },
 {
   id:2,
   title:"trending this week",
   cover:"",
   places:"12 places",
 },
 {
   id:2,
   title:"trending this week",
   cover:"",
   places:"12 places",
 },
 {
    id:2,
    title:"trending this week",
    cover:"",
    places:"12 places",
 },

];

const diningFilters = [
  {
    id:1,
    icon: <i className='fi fi-rr-settings-sliders absolute-center'></i>,
    title:'Filters',
  },
  {
    id:2,
    title:'Rating: 4.0+',
  },
  {
    id:3,
    title:'Safe and Hygienic',
  },
  {
    id:4,
    title:'Pure Veg',
  },
  {
    id:5,
    icon: <i className='fi fi-rr-apps-sort absolute-center'></i>,
    title:'Delivery Time',
  },
  {
    id:6,
    title:'Great Offers',
  },
];//copy from dining tab

const diningList = diningOut;

const DiningOut = () => {
  return (
    <div> 
      <Collection list ={collectionList}/>
      <div className='max-width'>
         <Filters filterList={diningFilters}/>
         <ExploreSection list={diningList} collectionName='Dine-Out Restaurants in Lucknow'/>
      </div>
    </div>
  );
};

export default DiningOut;