import React, { Component } from 'react';
import './App.css';
import Feed from './News/Feed'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">React News Feed</a>
          </div>
        </nav>
        <Feed />
        <footer class="page-footer">
          <div class="footer-copyright">
            <div class="container center">
              powered by <a class="grey-text text-lighten-4 center" href="https://newsapi.org">News API</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
