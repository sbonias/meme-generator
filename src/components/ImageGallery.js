// if you wanted to import from an API:
// useState to maintain state for to hold images
// the use effect would make the update to the image so query it
// import React, { useState, useEffect } from 'react';

import React from 'react';
import memes from '../data/memes.json';
import MemeImage from './MemeImage';

// props in argument name because it'll need props from the parent
export default function ImageGallery(props) {
  // function based component needs to return something
  // we're going to be returning jsx
  // a function always needs to return one route jsx element (div, span, anything, but only one)
  // we're using a react fragment (like a div that's not a div, just a way of dividing
  // up your components and providing one route element without providing html)

  // describe what it is this needs to do:
  // need to get the list of images to display
  // need to render a MemeImage component for each image
  // need an event for when the user selects an image to update the state

  console.log(memes);

  // if rendering from an API
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   axios.get('/api/memeimages').then(() => {});
  // }, []);

  // we need to map or iterate over the array of objects that is memes
  // need to put image in curly brackets because it's a js object for the image item
  return (
    <>
      {memes.map((image) => (
        <MemeImage
          setState={props.setState}
          state={props.state}
          image={image}
        />
      ))}
    </>
  );
}
