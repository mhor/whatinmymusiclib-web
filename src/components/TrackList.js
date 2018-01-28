import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { TrackCard } from './TrackCard';

class TrackList extends Component {
  render() {
    const { result, nextPage, hasMore, entities, isLoading, isError } = this.props.tracksList;
    return (
      <div className="home">
        <div className="tracks-selector">
          <InfiniteScroll
            hasMore={!isLoading && hasMore}
            loadMore={() => this.props.fetchTracks(nextPage, 50)}
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
    );
  }
}

export default TrackList;
