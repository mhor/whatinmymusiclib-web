import React, { Component } from 'react';
import { TrackCard } from './TrackCard';

class TrackList extends Component {
  componentWillMount() {
    this.props.fetchTracks();
  }

  render() {
    const { tracks, loading, error } = this.props.tracksList;
    return (
      <div className="home">
        <div className="tracks-selector">
          {tracks.map(
            trackData => <TrackCard key={trackData._id} {...trackData} />,
          )}
        </div>
      </div>
    );
  }
}

export default TrackList;
