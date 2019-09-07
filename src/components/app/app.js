import React from 'react';

import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import Counter from '../counter/counter.js';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;