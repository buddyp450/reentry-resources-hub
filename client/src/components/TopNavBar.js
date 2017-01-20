import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const navHeaders = ["HOME", "HOUSING", "JOBS", "PUBLIC BENEFITS", "HEALTH CARE", "EDUCATION", "LEGAL", "SUPPORT PROGRAMS", "OTHER RESOURCES", "CONTACT US"];

class TopNavBar extends Component {

  render() {
    return (
      <div>
        <Tabs defaultActiveKey={0} id="nav">
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

export default TopNavBar;