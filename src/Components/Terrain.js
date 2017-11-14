import React, { Component } from 'react';
import chalis from '../images/chalis.svg';
import './styles/Terrain.css';
import PropTypes from 'prop-types';

class Terrain extends Component {
  render() {

    const { i, terrain : { type, color } } = this.props;
    
    let chalice = null;
    if(type === 'chalice') chalice = (
      <img src={chalis} alt="" /> 
    );

    return (
      <div
        className="Terrain"
        key={i}
        style={{
          backgroundColor: color,
        }}
      >
        {chalice}
      </div>
    );
  }
}

Terrain.propTypes = {
  name: PropTypes.string
};

export default Terrain;