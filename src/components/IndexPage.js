import React from 'react';
import { TrackCard } from './TrackCard';

export const IndexPage = ({ tracks }) => (
  <div className="home">
    <div className="tracks-selector">
      {tracks.map(
        trackData => <TrackCard key={trackData.id} {...trackData} />,
      )}
    </div>
  </div>
);

export default IndexPage;
