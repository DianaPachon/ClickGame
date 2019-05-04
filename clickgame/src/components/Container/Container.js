import React from 'react';
import './Container.css';
import Animal from '../Animal';

// main container for each Animal component
// loops through each index in props.animals, which contains an array of character images
// to create a new Animal component for each image
// attaches the passed down clickEvent function to each Animal component
const Container = props => (
  // loops through
  <div
    className={
      props.shake
        ? 'container d-flex flex-wrap justify-content-center shake'
        : 'container d-flex flex-wrap justify-content-center'
    }
  >
    {props.animals.map((a, i) => <Animal name={a} key={i} clickEvent={props.clickEvent} />)}
  </div>
);

export default Container;