import React from 'react';
import Meme from '../components/Meme';
import MemeForm from '../components/MemeForm';
import ImageGallery from '../components/ImageGallery';

export default function MemeCreation() {
  // function based component needs to return something
  // we're going to be returning jsx
  // a function always needs to return one route jsx element (div, span, anything, but only one)
  // we're using a react fragment (like a div that's not a div, just a way of dividing
  // up your components and providing one route element without providing html)
  return (
    <>
      <div className="row">
        <div className="col-8">
          <Meme />
          <MemeForm />
        </div>
        <div className="col-4">
          <ImageGallery />
        </div>
      </div>
    </>
  );
}
