import React from 'react';
import './App.css';
import NavigationBar from './components/Navigation Bars/NavigationBar';
import SideBar from './components/Navigation Bars/SideBar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      content: 'home',
      theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    }
  }

  selectHome = () => {
    this.setState({ content: 'home' });
  }

  selectProjects = () => {
    this.setState({ content: 'projects' });
  }

  selectAbout = () => {
    this.setState({ content: 'about' });
  }

  changeTheme = () => {
    if (this.state.theme === 'light') {
      this.setState({ theme: 'dark' });
      localStorage.setItem('theme', 'dark');
    }
    else{
      this.setState({ theme: 'light' });
      localStorage.setItem('theme', 'light');
    }
  }

  getTheme(arg, color) {
    return arg + ' ' + color;
  }

  render() {
    return (
      <div className="App">
        <NavigationBar selectHome={this.selectHome} selectProjects={this.selectProjects} selectAbout={this.selectAbout} theme={this.state.theme} getTheme={this.getTheme}/>
        <SideBar content={this.state.content} changeTheme={this.changeTheme} theme={this.state.theme} getTheme={this.getTheme}/>
        <Main content={this.state.content} theme={this.state.theme} getTheme={this.getTheme}/>
        <Footer theme={this.state.theme} getTheme={this.getTheme}/>
      </div>
    );
  }
}

export default App;
