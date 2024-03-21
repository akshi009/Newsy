import React, { Component } from 'react';
import loading from '../../src/loader.gif';

export default class Loader extends Component {
  render() {
    return (
      <div>
        <img src={loading} alt="loading" className='justify-center mx-auto'/>
      </div>
    )
  }
}
