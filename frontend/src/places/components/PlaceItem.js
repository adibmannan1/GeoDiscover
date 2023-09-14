import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import './PlaceItem.css';

const PlaceItem = props => {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
          <div className='place-item__info_heading'>
            <h2>{props.title}</h2>
            <button className='edit'>EDIT</button>
          </div>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
          <button className='view'>VIEW ON MAP</button>
          <button className='delete'>DELETE</button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
