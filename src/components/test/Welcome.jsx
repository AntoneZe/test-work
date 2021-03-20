import React from 'react';
import './welcome.less'

function Welcome(props) {
  return <h1 className="test">Привет, {props.name}</h1>;
}

export default Welcome;