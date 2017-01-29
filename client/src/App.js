import React, { Component } from 'react';
import { Grid, Navbar } from 'react-bootstrap';
import TopNavBar from './components/TopNavBar.js';
import HugeHeader from './components/HugeHeader.js';
import './styles.css';

// TODO: get permission to use https://www.elon.edu/images/e-web/law/about/GreensboroSkyline.jpg
class App extends Component {
  render() {
    return (
      <div>
        <HugeHeader />
        <div style={styles.style}>
          <h1>Home</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut gravida velit. Proin ullamcorper sed ex sed pellentesque. Fusce vitae maximus elit. Maecenas malesuada vehicula finibus. Quisque cursus pretium elit. Morbi at tristique felis. Suspendisse lacus justo, elementum sed sapien id, efficitur pellentesque arcu. Praesent sapien libero, pretium quis augue non, pulvinar mollis metus. Aliquam nisl lacus, scelerisque accumsan luctus et, tempus iaculis tortor. Cras consectetur finibus leo et hendrerit. Nunc tincidunt vitae odio id suscipit. Curabitur lobortis porttitor gravida. Pellentesque id ligula vitae nunc elementum euismod ut eleifend lorem. Mauris lacinia scelerisque dui sed fringilla. Proin sit amet libero ut enim mattis gravida tincidunt et libero.

Integer tellus sem, efficitur ac sagittis sit amet, cursus id purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam facilisis tristique mollis. Integer felis nisi, sagittis eu gravida eget, facilisis sit amet nunc. Morbi eu dui velit. Fusce aliquet dapibus est. Cras at pharetra purus, sit amet sodales nulla. Aliquam ac quam ipsum. Pellentesque a leo dolor. Donec pulvinar dolor risus, sit amet pretium nisi ultrices tempus. Morbi eget mi sit amet ipsum blandit volutpat et eget turpis. Nulla a molestie felis, et congue eros.
          </p>
        </div>
      </div>
    );
  }
}

const styles = {
  style: {
    margin: '15%',
    fontSize: '1.8rem',
  }
}

export default App;
