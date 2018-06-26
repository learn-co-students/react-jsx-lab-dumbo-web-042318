import React from 'react';
import FillerText from './FillerText';


class Webpage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>{'The world\'s coolest webpage'}</h2>
        </div>
        <div>
          <FillerText />
          <FillerText />
        </div>
      </div>
    )
  }
}

export default Webpage;
