import React, { useState } from 'react';
import Meme from '../components/Meme';
import MemeForm from '../components/MemeForm';
import ImageGallery from '../components/ImageGallery';

export default function MemeCreation() {
  // function based component needs to return something
  // we're going to be returning jsx
  // a function always needs to return one route jsx element (div, span, anything, but only one)
  // we're using a react fragment (like a div that's not a div, just a way of dividing
  // up your components and providing one route element without providing html)

  // this state contains image, text1 and text2
  // default state
  // will need to pass this to the return section of ImageGallery component
  const [state, setState] = useState({
    currentImage: null,
    line1Text: '',
    line2Text: '',
  });

  return (
    <>
      <div className="row">
        <div className="col-8">
          <Meme state={state} />
          <MemeForm />
        </div>
        <div className="col-4">
          <ImageGallery state={state} setState={setState} />
        </div>
      </div>
    </>
  );
}
