import React from 'react';
import './App.css';
import NavigationBar from './components/Navigation Bars/NavigationBar';
import SideBar from './components/Navigation Bars/SideBar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  constructor(){
    super();

    this.state={
      content: 'home'
    }
  }
  
  selectHome = () => {
    this.setState({content: 'home'});
  }

  selectProjects = () => {
    this.setState({content: 'projects'});
  }

  selectAbout = () => {
    this.setState({content: 'about'});
  }

  render() {
    return (
      <div className="App">
        <NavigationBar selectHome={this.selectHome} selectProjects={this.selectProjects} selectAbout={this.selectAbout}/>
        <SideBar content={this.state.content}/>
        <Main content={this.state.content}/>
        <Footer />
      </div>
    );
  }
}

export default App;
