import React, { Component } from 'react';
import NavBar from './components/NavBar';
import FirstTable from './components/FirstTable';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <FirstTable />
        <Footer />
      </div>
    );
  }
}

export default App;
