import React from 'react';

export default function MemeForm(props) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setState({
      ...props.state,
      [name]: value,
    });
  };
  // function based component needs to return something
  // we're going to be returning jsx
  // a function always needs to return one route jsx element (div, span, anything, but only one)
  // we're using a react fragment (like a div that's not a div, just a way of dividing
  // up your components and providing one route element without providing html)
  return (
    <form>
      <div className="form-group">
        <label htmlFor="line1">First Line</label>
        <input
          type="text"
          value={props.state.line1}
          className="form-control"
          name="line1Text"
          id="line1"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="line2">Second Line</label>
        <input
          type="text"
          value={props.state.line2}
          className="form-control"
          name="line2Text"
          id="line2"
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
}
