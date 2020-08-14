import React from 'react';

export default function Meme(props) {
  // function based component needs to return something
  // we're going to be returning jsx
  // a function always needs to return one route jsx element (div, span, anything, but only one)
  // we're using a react fragment (like a div that's not a div, just a way of dividing
  // up your components and providing one route element without providing html)

  // inline css for React
  const imageStyle = {
    width: '100%',
  };

  // the && is a conditional to display some image if no image exists or vice-versa
  return (
    <>
      <div>
        {props.state.currentImage ? (
          <img
            style={imageStyle}
            src={`/images/${props.state.currentImage.file}`}
            alt={props.state.currentImage.name}
          />
        ) : (
          <p>Click on an image to the right to select a background.</p>
        )}
      </div>
    </>
  );
}
