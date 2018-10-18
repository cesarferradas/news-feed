import React, { Component } from 'react';
import SingleArticle from './Feed'

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {

  }

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
              powered by <a class="grey-text text-lighten-4 right" href="https://newsapi.org">News API</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Feed;
