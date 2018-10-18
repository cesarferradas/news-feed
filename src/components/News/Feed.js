import React, { Component } from 'react';
import SingleArticle from './SingleArticle';
import Filter from './../Search/Filter';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [],
      filterTerm: ''
    };
    this.updateFilterState = this.updateFilterState.bind(this)
  }

  componentDidMount() {
    console.log(this.filter);
    const url = `https://newsapi.org/v2/everything?q=vegan&apiKey=944a614bdc604b72a0dcb35207c1d422`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          feed: data.articles
        })
      })
      .catch(error => console.log(error));
  }

  updateFilterState(val) {
    console.log(val);
    this.setState({
      filterTerm: val
    });
  }

  renderArticle(article, filterTerm) {
    var title = article.title.toLowerCase();
    var source = article.source.name.toLowerCase();
    var substring = filterTerm.toLowerCase();
    if (title.includes(substring) || source.includes(substring)) {
      return (
        <SingleArticle key={article.url} article={article} />
      );
    }
  }

  render() {
    return (
      <div className="container container-height">
        <div className="row">
          <Filter currentFilter={this.state.filterTerm} updateFilterState={this.updateFilterState} />
        </div>
        <div className="row">
          {this.state.feed.map((article) => this.renderArticle(article, this.state.filterTerm))}
        </div>
      </div>
    );
  }
}

export default Feed;
