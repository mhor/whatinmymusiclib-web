import React, { Component } from 'react';
import SearchInput from 'react-search-input';
import InfiniteScroll from 'react-infinite-scroller';
import { TrackCard } from './TrackCard';

class TrackList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  searchUpdated(searchTerm) {
    this.props.fetchTracks(1, 50, searchTerm, true);
  }

  render() {
    const {
      result,
      nextPage,
      hasMore,
      entities,
      isLoading,
      isError,
      searchTerm,
    } = this.props.tracksList;
    return (
      <div>
        <div>
          <section className="hero is-primary">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                    What In My Music Lib
                </h1>
                <div>
                  <SearchInput
                    className="control"
                    inputClassName="input"
                    onChange={this.searchUpdated}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="section">
          <div className="container">
            <div className="home">
              <div className="tracks-selector">
                <InfiniteScroll
                  hasMore={!isLoading && hasMore}
                  loadMore={() => this.props.fetchTracks(nextPage, 50, searchTerm, false)}
                  threshold={450}
                >
                  {
                    result.map(
                      trackId => <TrackCard key={trackId} {...entities[trackId]} />,
                    )
                  }
                </InfiniteScroll>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TrackList;
