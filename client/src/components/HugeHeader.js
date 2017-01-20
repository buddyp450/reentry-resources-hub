import React, { Component } from 'react';
class HugeHeader extends Component {
  render() {
    return (
      <div style={styles.style}>
        <img alt="skyline" src="assets/GreensboroSkyline.jpg" />
      </div>
    );
  }
}

const styles = {
  style: {
    backgroundColor: 'blue',
    fontSize: '42px',
    height: '62vh',
  },
};

export default HugeHeader;