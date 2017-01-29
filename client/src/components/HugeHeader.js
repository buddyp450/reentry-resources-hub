import React, { Component } from 'react';
import TopNavBar from './TopNavBar.js';
class HugeHeader extends Component {
  render() {
    return (
      <div style={styles.style}>
        { /* <img alt="skyline" src="assets/GreensboroSkyline.jpg"/> */ }
        <TopNavBar/>
      </div>
    );
  }
}

const styles = {
  style: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flex: '1',
    backgroundColor: '#5A8396',
    height: '62vh'
  },
};

export default HugeHeader;