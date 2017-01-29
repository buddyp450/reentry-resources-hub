import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const navHeaders = ["HOME", "HOUSING", "JOBS", "PUBLIC BENEFITS", "HEALTH CARE", "EDUCATION", "LEGAL", "SUPPORT PROGRAMS", "OTHER RESOURCES", "CONTACT US"];

class TopNavBar extends Component {

  render() {
    return (
      <div style={styles.style}>
        <Tabs defaultActiveKey={0} id="nav" styles={styles.style}>
        {
          navHeaders.map(function(headerStr, idx) {
            return <Tab eventKey={idx} title={headerStr} key={idx} />
          })
        }
        </Tabs>
      </div>
    )
  }
}

const styles = {
  style: {
    alignSelf: 'flex-end',
  }
}

export default TopNavBar;