import React from 'react';
import {useParams} from 'react-router-dom'

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Colosseum',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://www.holidify.com/images/cmsuploads/compressed/Colosseum_in_Rome,_Italy_-_April_2007_20181213182254.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Eifel Tower',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://www.studentuniverse.com/blog/wp-content/uploads/2021/06/AdobeStock_296153501-1350x900.jpeg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  },
  {
    id: 'p3',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u3'
  },
  {
    id: 'p4',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u4'
  },
  {
    id: 'p5',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u5'
  },
  {
    id: 'p6',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u6'
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(places=>places.creator===userId)

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;