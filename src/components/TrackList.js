import React, { Component } from 'react';
import { TrackCard } from './TrackCard';

class TrackList extends Component {
  componentWillMount() {
    this.props.fetchTracks();
  }

  render() {
    const { result, entities, loading, error } = this.props.tracksList;
    return (
      <div className="home">
        <div className="tracks-selector">
          {
            result.map(
              trackId => <TrackCard key={trackId} {...entities[trackId]} />,
            )
          }
        </div>
      </div>
    );
  }
}

export default TrackList;
