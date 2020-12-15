import React from 'react';
import './App.css';
import NavigationBar from './components/Navigation Bars/NavigationBar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
