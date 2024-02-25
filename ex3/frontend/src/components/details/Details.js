import React from 'react';
import './details.style.css';

const Details = ({id}) => {
  return (
    <div className='detailsDiv'>
      <h1 className='detailsTitle'>Family reunification form of id - {id} </h1>
      <div className='detailsContainer'>
        <ul>
            <li>Name - </li>
            <li>Personal Situation - </li>
            <li>Email - </li>
            <li>Gender - </li>
            <li>Birth Date - </li>
            <li>Birth Place - </li>
            <li>Phone - </li>
        </ul>

      </div>
    </div>
  );
};

export default Details;
