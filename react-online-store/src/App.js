// App.js
import React from 'react';
import MainPage from './components/MainPage';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header cart={this.state.cart} favorites={this.state.favorites} />
        <MainPage />
      </div>
    );
  }
}

export default App;
