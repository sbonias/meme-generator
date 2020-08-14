import React from 'react';

export default function MemeImage(props) {
  console.log(props);

  // inline css for React
  const imageStyle = {
    width: '100%',
  };

  const setImage = () => {
    props.setState({
      ...props.state, // maintains current state
      currentImage: props.image, // setting new value we want to change
    });
  };

  // function based component needs to return something
  // we're going to be returning jsx
  // a function always needs to return one route jsx element (div, span, anything, but only one)
  // we're using a react fragment (like a div that's not a div, just a way of dividing
  // up your components and providing one route element without providing html)
  return (
    <li className="list-group-item">
      <img
        style={imageStyle}
        src={`/images/${props.image.file}`}
        alt={props.image.name}
        onClick={setImage}
      />
    </li>
  );
}
